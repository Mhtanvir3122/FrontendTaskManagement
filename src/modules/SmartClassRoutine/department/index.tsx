import { useRef, useState } from "react";

const TEST_RUNS = 3;
const DOWNLOAD_BYTES = 8_000_000; // 8MB

const SpeedTest = () => {
  const [ping, setPing] = useState<number | null>(null);
  const [download, setDownload] = useState<string>("-");
  const [upload, setUpload] = useState<string>("-");
  const [progress, setProgress] = useState(0);
  const [liveSpeed, setLiveSpeed] = useState<string>("0.00");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  /* -------------------- Ping (single run) -------------------- */
  const pingOnce = async (): Promise<number> => {
    const start = performance.now();
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      cache: "no-store",
    });
    return Math.round(performance.now() - start);
  };

  /* -------------------- Ping Average -------------------- */
  const pingAverage = async (): Promise<number> => {
    let total = 0;
    for (let i = 0; i < TEST_RUNS; i++) {
      total += await pingOnce();
    }
    return Math.round(total / TEST_RUNS);
  };

  /* -------------------- Download (single run with live meter) -------------------- */
  const downloadOnce = async (): Promise<number> => {
    abortRef.current = new AbortController();
    const start = performance.now();

    const res = await fetch(
      `https://speed.cloudflare.com/__down?bytes=${DOWNLOAD_BYTES}`,
      {
        cache: "no-store",
        signal: abortRef.current.signal,
      }
    );

    const reader = res.body!.getReader();
    let received = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      received += value.length;

      const elapsed = (performance.now() - start) / 1000;
      const mbps = ((received * 8) / elapsed / 1024 / 1024).toFixed(2);

      setLiveSpeed(mbps);
      setProgress(Math.min((received / DOWNLOAD_BYTES) * 100, 100));
    }

    const end = performance.now();
    return (received * 8) / ((end - start) / 1000) / 1024 / 1024;
  };

  /* -------------------- Upload (single run) -------------------- */
  const uploadOnce = async (): Promise<number> => {
    const data = new Blob([new ArrayBuffer(4 * 1024 * 1024)]);
    const start = performance.now();

    await fetch("https://httpbin.org/post", {
      method: "POST",
      body: data,
    });

    const end = performance.now();
    return (data.size * 8) / ((end - start) / 1000) / 1024 / 1024;
  };

  /* -------------------- Generic Average Helper -------------------- */
  const average = async (fn: () => Promise<number>) => {
    let total = 0;
    for (let i = 0; i < TEST_RUNS; i++) {
      total += await fn();
    }
    return (total / TEST_RUNS).toFixed(2);
  };

  /* -------------------- Start Test -------------------- */
  const startTest = async () => {
    try {
      setError(null);
      setLoading(true);
      setProgress(0);
      setLiveSpeed("0.00");

      // ✅ Ping Avg
      const avgPing = await pingAverage();
      setPing(avgPing);

      // ✅ Download Avg
      const avgDownload = await average(downloadOnce);
      setDownload(avgDownload);

      // ✅ Upload Avg
      const avgUpload = await average(uploadOnce);
      setUpload(avgUpload);

    } catch (err) {
      console.error(err);
      setError("ইন্টারনেট স্পিড টেস্ট ব্যর্থ হয়েছে ❌");
      abortRef.current?.abort();
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  /* -------------------- UI -------------------- */
  return (
    <div style={{ maxWidth: 420, margin: "auto", fontFamily: "sans-serif" }}>
      <h2>Internet Speed Test</h2>

      {error && (
        <div style={{ color: "red", marginBottom: 10 }}>
          {error}
        </div>
      )}

      <p>Ping (Avg): <b>{ping ?? "-"}</b> ms</p>
      <p>Download (Avg): <b>{download}</b> Mbps</p>
      <p>Upload (Avg): <b>{upload}</b> Mbps</p>

      {loading && (
        <h3 style={{ margin: "10px 0" }}>
          ⬇ Live Speed: {liveSpeed} Mbps
        </h3>
      )}

      {/* Progress Bar */}
      <div style={{ background: "#eee", height: 10, borderRadius: 6 }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#4caf50",
            borderRadius: 6,
            transition: "width 0.2s",
          }}
        />
      </div>

      <button
        onClick={startTest}
        disabled={loading}
        style={{ marginTop: 15, padding: "8px 16px" }}
      >
        {loading ? "Testing..." : "Start Test"}
      </button>
    </div>
  );
};

export default SpeedTest;

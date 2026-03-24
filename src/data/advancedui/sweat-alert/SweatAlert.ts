import Swal from "sweetalert2";

export const sweetAlertData = [
  {
    title: "Basic Example",
    text: "click_1",
    variant: "primary",
    onClick: () =>
      Swal.fire({
        title: "Any Fool Can Use a Computer",
        customClass: { confirmButton: "btn btn-primary" },
        buttonsStyling: false,
      }),
  },
  {
    title: "A title with a text under",
    text: "click_2",
    variant: "secondary",
    onClick: () =>
      Swal.fire("The Internet?", "That thing is still around?", "question"),
  },
  {
    title: "A success message!",
    text: "click_3",
    variant: "success",
    onClick: () => Swal.fire("Good job!", "You clicked the button!", "success"),
  },
  {
    title: "A custom positioned dialog",
    text: "click_4",
    variant: "warning",
    onClick: () =>
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }),
  },
  {
    title: "Custom animation",
    text: "click_5",
    variant: "info",
    onClick: () =>
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }),
  },
  {
    title: "A message with custom Image Header",
    text: "click_6",
    variant: "danger",
    onClick: () =>
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "/images/blog-app/08.jpg",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image",
      }),
  },
  {
    title: "Ajax request example",
    text: "click_7",
    variant: "secondary",
    onClick: () =>
      Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              );
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
          });
        }
      })
  },
  {
    title: "Modals (queue) example",
    text: "click_8",
    variant: "danger",
    onClick: () => {
      let timerInterval: NodeJS.Timeout;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b>2000</b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const timerLeft = Swal.getTimerLeft();
            if (timerLeft !== undefined) {
              Swal.update({ html: `I will close in <b>${timerLeft}</b> milliseconds.` });
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    },
  },
  {
    title: "A message with auto close timer",
    text: "click_9",
    variant: "info",
    onClick: () => {
      let timerInterval: NodeJS.Timeout;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b>2000</b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const timerLeft = Swal.getTimerLeft();
            if (timerLeft !== undefined) {
              Swal.update({ html: `I will close in <b>${timerLeft}</b> milliseconds.` });
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
    },
  {
    title: "Custom HTML description and buttons",
    text: "click_10",
    variant: "success",
    onClick: () =>
      Swal.fire({
        title: "<strong>Welcome</strong>",
        html: `Start Multipurpose, clean modern responsive bootstrap 5 admin template`,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Great!",
        cancelButtonText: "Cancel",
      }),
  },
  {
    title: "Confirmation With Triggers",
    text: "click_11",
    variant: "secondary",
    onClick: () =>
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }),
  },
  {
    title: "Confirmation With Approvals",
    text: "click_12",
    variant: "danger",
    onClick: () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-primary ms-2",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
  },
  {
    title: "Custom width, padding and background",
    text: "click_13",
    variant: "primary",
    onClick: () => {
      Swal.fire({
        title: "Sweet!",
        text: "Custom width, padding, background..",
      });
    },
  },
  {
    title: "Dynamic queue example",
    text: "click_14",
    variant: "warning",
    onClick: async () => {
      const ipAPI = "https://api.ipify.org?format=json";
      let inputValue = "";
      try {
        const response = await fetch(ipAPI);
        const data = await response.json();
        inputValue = data.ip;
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
        inputValue = "";
      }
      const { value: ipAddress } = await Swal.fire({
        title: "Enter your IP address",
        input: "text",
        inputLabel: "Your IP address",
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          }
        },
      });

      if (ipAddress) {
        Swal.fire(`Your IP address is ${ipAddress}`);
      }
    },
  },
  {
    title: "Dismiss Alert",
    text: "click_15",
    variant: "light",
    onClick: () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    },
  },
  {
    title: "Mixin example",
    text: "click_16",
    variant: "dark",
    onClick: () => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    },
  },
];

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import { CourseService } from "@/service/Dashboard.service";
import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";
import Button from "@/components/myComponant/Button";
import Icon from "@/components/myComponant/Icon";
import Pagination from "@/components/myComponant/Pagination";
import Separator from "@/components/myComponant/Separator/Separator";
import Input from "@/components/myComponant/input/input";
import { searchParamsToObject } from "@/components/myComponant/utils/makeObject";
import {
  IMeta,
  useDebounce,
} from "@/components/myComponent/interface/common.interface";

import CourseForm from "./Form";
import CourseTable from "./Table";
import { AgentMappingModal } from "./modal/AgentMappingModal";

const initMeta: IMeta = {
  page: 0,
  limit: 10,
  sort: [
    {
      order: "asc",
      field: "createdOn",
    },
  ],
};
const Course = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [search, setSearch] = useState<string>(
    searchParams.get("searchKey") || ""
  );
  const searchKey = useDebounce(search, 500);
  const [respMeta, setRespMeta] = useState<IMeta>(initMeta);
  const [listData, setListData] = useState<any>([]);
  const [updateData, setUpdateData] = useState<any>({});
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const params: any = searchParamsToObject(searchParams);

  // update search params
  useEffect(() => {
    if (searchKey) params.searchKey = searchKey;
    else delete params.searchKey;

    setSearchParams({ ...params });
    // eslint-disable-next-line
  }, [searchKey]);

  const handleUpdate = (data: any) => {
    setIsUpdate(true);
    setUpdateData(data);
    setIsDrawerOpen(true);
  };

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
    updateData.current = undefined;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCancelModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    getDataList();
    // eslint-disable-next-line
  }, [searchParams]);

  const getDataList = (reqMeta = null) => {
    const payload = {
      meta: searchKey
        ? reqMeta
          ? { ...reqMeta }
          : { ...respMeta, page: 0 }
        : reqMeta || respMeta,
      body: {
        searchKey: searchKey,
      },
    };
    CourseService.coursesGetList(payload).then((res) => {
      setListData(res?.data?.body || []);
      setRespMeta(
        res?.data?.meta
          ? { ...res?.data?.meta }
          : { limit: respMeta?.limit, page: 0 }
      );
    });
    // .catch((err) => toast.error(err?.message))
  };

  console.log(listData);
  const onPageChanged = (metaParams: IMeta) => {
    getDataList(metaParams);
  };
  return (
    <Container fluid>
      <Row>
        <Breadcrumbs
          mainTitle="Course"
          title="Form Elements"
          path={["Course"]}
          Icon={Cardholder}
        />
<div className="d-flex flex-column flex-md-row gap-3 align-items-stretch">
          <div className="flex-grow-1">
            <Input
              type="search"
              placeholder="অনুসন্ধান করুন..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Button size="md" onClick={() => setIsDrawerOpen(true)}>
              <Icon icon="add" />
              &nbsp;যুক্ত করুন
            </Button>
          </div>
        </div>

        <div className="mt-2">
          <CourseTable tableData={listData} handleUpdate={handleUpdate}>
            <Pagination
              meta={respMeta}
              pageNeighbours={2}
              onPageChanged={onPageChanged}
            />{" "}
          </CourseTable>
        </div>

        <CourseForm
          isOpen={isDrawerOpen}
          onClose={onDrawerClose}
          updateData={updateData}
          onSubmit={onSubmit}
        />

        <AgentMappingModal
          isOpen={isOpenModal}
          onClose={onCancelModal}
          data={listData}
        />
      </Row>
    </Container>
  );
};
export default Course;

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";
import Button from "@/components/myComponant/Button";
import Icon from "@/components/myComponant/Icon";
import Pagination from "@/components/myComponant/Pagination";
import Input from "@/components/myComponant/input/input";
import { searchParamsToObject } from "@/components/myComponant/utils/makeObject";
import {
  IMeta,
  useDebounce,
} from "@/components/myComponent/interface/common.interface";

import RoleForm from "./Form";
import RoleTable from "./Table";
import { ReportService, RoleService } from "@/service/service";
import { toast } from "react-toastify";

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
const Role = () => {
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
  const [roleData, setRoleData] = useState<any>();

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
    setUpdateData({})
        setIsUpdate(false);

  };

const onSubmit = (e: any) => {
    console.log(e);
    
    ReportService.assignRole(  updateData?.id,e?.roles?.map((e: any) => e?.id) )
      .then((resp) => {
        getDataList();
        
      })
      .catch((err) => {
      })
    
    

    onDrawerClose();

  }
  const onCancelModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    getDataList();
    // eslint-disable-next-line
  }, [searchParams]);

  const getDataList = (reqMeta = null) => {
    const payload = {
      // meta: searchKey
      //   ? reqMeta
      //     ? { ...reqMeta }
      //     : { ...respMeta, page: 0 }
      //   : reqMeta || respMeta,
      body: {
        // searchKey: searchKey,
      },
    };
    ReportService.registrationEmpList({keyword:searchKey}).then((res) => {
      setListData(res?.data || []);
      // setRespMeta(
      //   res?.data?.meta
      //     ? { ...res?.data?.meta }
      //     : { limit: respMeta?.limit, page: 0 }
      // );
    });
    // .catch((err) => toast.error(err?.message))
  };
 useEffect(() => {
    getRoleList ();

  }, []);

  const getRoleList = () => {
    ReportService.roleSearch({ keyword: "" })
      .then((resp) => {
        setRoleData(resp?.data);
      })
      .catch((err) => {
      })
    
  };
  const onPageChanged = (metaParams: IMeta) => {
    getDataList(metaParams);
  };
  return (
    <Container fluid>
      <Row>
        <Breadcrumbs
          mainTitle="Role"
          title="Form Elements"
          path={["Role"]}
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
          <RoleTable tableData={listData} handleUpdate={handleUpdate}>
            <Pagination
              meta={respMeta}
              pageNeighbours={2}
              onPageChanged={onPageChanged}
            />{" "}
          </RoleTable>
        </div>

        <RoleForm
          isOpen={isDrawerOpen}
          onClose={onDrawerClose}
          updateData={updateData}
          onSubmit={onSubmit}
          listData={listData}
          roleData={roleData}
        />
      </Row>
    </Container>
  );
};
export default Role;

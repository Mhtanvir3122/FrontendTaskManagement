import axios from "axios";
export interface Employee {
  id?: number;
  name: string;
  email: string;
  department: string;
}


const API_URL = "http://localhost:8080/service1/";
const API_URL2 = "http://localhost:8080/service1/employees/save"; // API Gateway URL
const API_URLUpdate = "http://localhost:8080/service1/employees/update"; // API Gateway URL
const API_URLDelete = "http://localhost:8080/service1/employees/delete"; // API Gateway URL




export const getEmployees = async () => {
    const response = await axios.get<Employee[]>(API_URL);
    return response.data;
};

export const getEmployeeById = async (id: number) => {
    const response = await axios.get<Employee>(`${API_URL}/${id}`);
    return response.data;
};

export const createEmployee = async (employee: Employee) => {
    const response = await axios.post<Employee>(API_URL2, employee);
    return response.data;
};

export const updateEmployee = async (id: number, employee: Employee) => {
    const response = await axios.put<Employee>(`${API_URLUpdate}/${id}`, employee);
    return response.data;
};

export const deleteEmployee = async (id: number) => {
    const response =await axios.delete(`${API_URLDelete}/${id}`);
    return response.data;

};

export const MenuService = { 


    menusGetList: async (config?: any): Promise<any> =>
        await axios.get( "http://localhost:8080/AuthService/auth/menus"),

    menusCreate: async (config?: any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/menus",config),
      menusUpdate: async (config?: any): Promise<any> =>
        await axios.put( "http://localhost:8080/AuthService/auth/menus/"+config?.id,config),
}


export const RoleService = { 


    RolesGetList: async (config?: any): Promise<any> =>
        await axios.get( "http://localhost:8080/AuthService/auth/roles"),

    RolesCreate: async (config?: any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/roles",config),
      RolesUpdate: async (config?: any): Promise<any> =>
        await axios.put( "http://localhost:8080/AuthService/auth/roles/"+config?.id,config),

       RoleSearch: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/roles/search", payload),
}
export const ReportService = {
    orgWiseAssetStatistics: async (payload:any): Promise<any> =>
      await axios.post( "http://localhost:8080/service1/employees/search", payload),

    deleteEmployee: async (id: number): Promise<any> =>
        await axios.delete(`${API_URLDelete}/${id}`),

    logIn: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/login", payload),

    registration: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/register", payload),
    registrationEmpList: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/search", payload),

    forgotPass: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/forgot-password", payload),
    
    getUser: async (config?: any): Promise<any> =>
        await axios.get( "http://localhost:8080/AuthService/auth/list"),

    roleSave: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/roles", payload),

    roleUpdate: async (payload:any,id: number): Promise<any> =>
        await axios.put( "http://localhost:8080/AuthService/auth/roles"+`/${id}`, payload),

    roleSearch: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/roles/search", payload),

    deleteRole: async (id: number): Promise<any> =>
        await axios.delete("http://localhost:8080/AuthService/auth/roles"+ `/${id}`),

    assignRole: async (id: number,payload:any): Promise<any> =>
        await axios.post("http://localhost:8080/AuthService/auth"+ `/${id}/assign-roles`,payload),

    routeConfigSave: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/route-configs", payload),

tsskCreate: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/service2/tasks/create", payload),

tsskList: async (payload:any): Promise<any> =>
    await axios.post( "http://localhost:8080/service2/tasks/search",payload),



tsskFilterList: async (payload:any): Promise<any> =>
    await axios.post( "http://localhost:8080/service2/tasks/filter",payload),

taskUpdate: async (id: number,payload:any): Promise<any> =>
    await axios.put( "http://localhost:8080/service2/tasks/task-update"+`/${id}`, payload),



taskDelete: async (id: number): Promise<any> =>
    await axios.delete( "http://localhost:8080/service2/tasks/task-delete/"+`${id}`),

taskWiseStatusCount: async (): Promise<any> =>
    await axios.get( "http://localhost:8080/service2/tasks/status-count"),



getAgentsByFign: async (): Promise<any> =>
    await axios.get( "http://localhost:8080/service2/tasks/agents"),


taskAssign: async (taskId: number, agentId: number): Promise<any> =>
    await axios.post("http://localhost:8080/service2/tasks/assign", null, {
        params: {
            taskId: taskId,
            agentId: agentId
        }
    }),


    routeConfigUpdate: async (payload:any,id: number): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/route-configs/"+`${id}/add-child`, payload),

    

    routeConfigAssign: async (id: number,payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/route-configs"+`/${id}/assign-roles-route`, payload),


    
    routeConfigAssignChild: async (id: number,payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/route-configs"+`/${id}/assign-roles-route-child`, payload),


    routeGet: async (): Promise<any> =>
        await axios.get( "http://localhost:8080/AuthService/auth/route-configs",),

    routeGetPost: async (payload:any): Promise<any> =>
        await axios.post( "http://localhost:8080/AuthService/auth/route-configs/route/search",payload),

    routeGetList: async (): Promise<any> =>
        await axios.get( "http://localhost:8080/AuthService/auth/route-configs/list",),

    routeConfigUpdate2: async (id: number,payload:any): Promise<any> =>
        await axios.put( "http://localhost:8080/AuthService/auth/route-configs/update"+`/${id}`, payload),


    routeConfigUpdatedd: async (payload:any,id: number): Promise<any> =>
        await axios.put( "http://localhost:8080/AuthService/auth/route-configs/child/"+`${id}`, payload),

    routeConfigDelete: async (id: number): Promise<any> =>
        await axios.delete( "http://localhost:8080/AuthService/auth/route-configs/child/"+`${id}`),

    routeConfigDeleteParent: async (id: number): Promise<any> =>
        await axios.delete( "http://localhost:8080/AuthService/auth/route-configs/parent/"+`${id}`),

    
}
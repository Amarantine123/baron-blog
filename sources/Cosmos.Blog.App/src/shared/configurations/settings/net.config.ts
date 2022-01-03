 interface NetConfiguration{
    contentType:string,
    messageDuration:number,
    requestTimeout:number,
    drRequestTimeout:number,
    successCode:number[]
}
export const Net : NetConfiguration={
    contentType: 'application/json;charset=UTF-8',
    // 消息框显示时长
    messageDuration: 3000,
    requestTimeout: 10000,
    drRequestTimeout: 100000,
    successCode: [200, 0, 311]
}


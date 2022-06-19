import request from "../network/request";
/**
 * 发送datalog,进行查询
 * @param {string}参数 
 * @return {Promise} 响应结果
 * */ 
export function emitDatalog(data) {
    // console.log(data)
    return request({
        url: "/query",
        method: "post",
        data
    });
}
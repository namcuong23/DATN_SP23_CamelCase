import { message } from "antd";
import React, { useEffect } from "react";
import { formatCurrency } from "../../../utils/hooks/FormatCurrrency";
import {useUpdateOrderStatusMutation} from '../../../service/employer/order';

import { useAddAdmServiceMutation } from '../../../service/admin/service';
const responseCodeList:any = {
  "00": "Giao dịch thành công",
  "07": "Trừ tiền thành công. Giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường)",
  "09": "Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.",
  "10": "Giao dịch không thành công do: Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần",
  "11": "Giao dịch không thành công do: Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch.",
  "12": "Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng bị khóa.",
  "13": "Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch.",
  "24": "Giao dịch không thành công do: Khách hàng hủy giao dịch",
  "51": "Giao dịch không thành công do: Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.",
  "65": "Giao dịch không thành công do: Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày.",
  "75": "	Ngân hàng thanh toán đang bảo trì.",
  "79": "Giao dịch không thành công do: KH nhập sai mật khẩu thanh toán quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch",
  "99": "Lỗi không xác định",
};

const VNPayCheckout = (): any => {
    const [addAdmService] = useAddAdmServiceMutation()
    const [updateOrderStatus] = useUpdateOrderStatusMutation()
    const queryParams = new URLSearchParams(window.location.search);
    let  vnp_OrderInfo = queryParams.get("vnp_OrderInfo")
    const responseCode = queryParams.get("vnp_ResponseCode") || "99" ; 
    const transactionNo = queryParams.get("vnp_TransactionNo")
    const vnp_Amount = Number(queryParams.get('vnp_Amount'));
  useEffect(async () =>{

  if(responseCode) {
    if(responseCode == "00"){
        message.success(responseCodeList[responseCode]);
        const {data} = await updateOrderStatus(vnp_OrderInfo)
        console.log(data);
        const service:any = {
            userId :data.user_id,
            packageId : data.package_id._id,
            expireDay : data.package_id.package_day,
            transactionNo,
        }
        await addAdmService(service);
    }
    else if (responseCode == "07"){
        message.warning(responseCodeList[responseCode]);
    }
    else {
        message.error(responseCodeList[responseCode]);
    }
  }
  },[])
  return <>
    <div>{vnp_OrderInfo}</div>
    <div>Số tiền : {formatCurrency(vnp_Amount/100)}</div>
    <div>Mã giao dịch : {transactionNo}</div>
    <div>Trạng thái :{responseCodeList[responseCode]}</div>
  </>;
};
export default VNPayCheckout;

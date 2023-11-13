import { message } from "antd";
import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/hooks/FormatCurrrency";
import {
  useUpdateOrderStatusMutation,
  useVnPayVerifyCheckoutMutation,
} from "../../../service/employer/order";
import { useNavigate } from "react-router-dom";
import { useAddAdmServiceMutation } from "../../../service/admin/service";
const responseCodeList: any = {
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
  const navigate = useNavigate();
  const [addAdmService] = useAddAdmServiceMutation();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [vnPayVerifyCheckout] = useVnPayVerifyCheckoutMutation();
  const queryParams = new URLSearchParams(window.location.search);
  const txnRef: string|null = queryParams.get("vnp_TxnRef");
  const [transaction,setTransaction] = useState([])
  useEffect(async () => {
    try {
      const  {data} : any = await vnPayVerifyCheckout(txnRef);
      setTransaction(data);
      if (data.vnp_ResponseCode == "00") {
        try {
          const { data: order }: any = await updateOrderStatus(
            data.vnp_OrderInfo
          );
          const service: any = {
            userId: order.user_id,
            packageDay: order.package_id.package_day,
            transactionNo : data.vnp_TransactionNo,
            currentService: order.order_name,
          };
          await addAdmService(service);
          message.success(responseCodeList[data.vnp_ResponseCode])
          setTimeout(()=>{
            window.close()
            localStorage.setItem(
              "checkout",
              responseCodeList[data.vnp_ResponseCode]
            );
          },2000)
        } catch (error: any) {
          message.error(error);
        }
      } else {
        message.error(responseCodeList[data.vnp_ResponseCode]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div>Mã giao dịch : {transaction?.vnp_TxnRef}</div>
      <div>Ngân hàng : { transaction?.vnp_BankCode }</div>
      <div>Số tiền : {formatCurrency(Number(transaction?.vnp_Amount) /100)}</div>
      <div>Trạng thái :{responseCodeList[transaction?.vnp_ResponseCode]}</div>
    </>
  );
};
export default VNPayCheckout;

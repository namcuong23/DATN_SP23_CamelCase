import { useState, useRef } from 'react';

import './Company.css'
import HeaderSearchhJob from '../../layouts/HeaderSearchhJob';
import React from 'react';

type Props = {}

const Company = (props: Props) => {
    const [openFilter, setOpenFilter] = useState(false)
    const filterRef: any = useRef()

    const handleOpenFilterList = () => {
        setOpenFilter(!openFilter)
    }

    return (
        <>
            <div className='bg-[#fff]'>
                <HeaderSearchhJob className={'py-[16px]'} />
            </div>
            <div className='company-wrap'>
                <div className="company-body">
                    <div className="company-header">
                        <h1 className='company-header__title'>Khám Phá Văn Hóa Công Ty</h1>
                        <p className="company-header__desc">
                            Tìm hiểu văn hoá công ty và chọn cho bạn nơi làm việc phù hợp nhất.
                        </p>
                        <div className="company-header__search">
                            <div className="company-header__search-wrap">
                                <label className='company-header__search-label' htmlFor="company-search-input"><i className="company-header__search-icon fa-solid fa-magnifying-glass"></i></label>
                                <input type="text" id='company-search-input' className="company-header__search-input" placeholder='Nhập tên công ty' />
                            </div>

                            <div className="company-header__search-btn">
                                Tìm
                            </div>
                        </div>
                    </div>

                    <div className="company-content">
                        <div className="company-content__header">
                            <h2 className='company-content__header-title'>
                                Công ty nổi bật
                                <span className='company-content__header-quantity'>(525)</span>
                            </h2>

                            <div className='company-content__filter' onClick={handleOpenFilterList}>
                                <span className='company-content__filter-value'>
                                    Tất cả lĩnh vực
                                </span>
                                <i className="company-content__filter-icon fa-solid fa-chevron-down"></i>

                                {
                                    openFilter &&
                                    <div ref={filterRef} className='company-content__filter-list' onClick={(e: any) => {
                                        e.stopPropagation()
                                    }}>
                                        <div className='company-content__filter-search'>
                                            <i className="company-content__filter-icon fa-solid fa-magnifying-glass"></i>
                                            <input type="text" className='company-content__filter-input'
                                                placeholder='Tìm kiếm' />
                                        </div>
                                        <div className='company-content__filter-item'>
                                            <input type="radio" className='company-content__filter-select' />
                                            <span className='company-content__filter-text'>
                                                Tất cả lĩnh vực
                                            </span>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>

                        <div className="container">
  <div className="row">
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-ali-logistics-viet-nam/106271.html">
            <div className="cover-wraper">
              <img
                src="https://www.topcv.vn/images/default_cover/topcv_cover_5.jpg"
                className="img-fluid"
                alt="CÔNG TY TNHH ALI LOGISTICS VIỆT NAM"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-ali-logistics-viet-nam/106271.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-ali-logistics-viet-nam-62a7f0b79767d.jpg"
                alt="CÔNG TY TNHH ALI LOGISTICS VIỆT NAM"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-ali-logistics-viet-nam/106271.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY TNHH ALI LOGISTICS VIỆT NAM
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Orderthangloi.com Là đơn vị cung cấp dịch vụ trung gian nhập
              hàng từ các website thương mại điện tử hàng đầu Trung Quốc. Dịch
              vụ của chúng tôi bao gồm:- Tư vấn tìm kiếm nguồn hàng trên các
              website bán buôn, bán lẻ hàng đầu Trung Quốc như alibaba.com,
              1688.com, taobao.com, tmall.com...- Mua hàng và kiểm tra hàng hóa-
              Đóng gói và làm việc với các đơn vị vận chuyển..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-cp-cong-nghe-giao-duc-truong-hoc-truc-tuyen-onschool/126682.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-cp-cong-nghe-giao-duc-truong-hoc-truc-tuyen-onschool-7147d5ac861d98ea293f259221409084-6445f7fa948cb.jpg"
                alt="CÔNG TY CP CÔNG NGHỆ GIÁO DỤC TRƯỜNG HỌC TRỰC TUYẾN - ONSCHOOL"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-cp-cong-nghe-giao-duc-truong-hoc-truc-tuyen-onschool/126682.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/RbJ9FYs5xgk3u1JBX7C2yKshm0eR1QoX_1669364788____df1ca19345c25306e78c6441441981ca.png"
                alt="CÔNG TY CP CÔNG NGHỆ GIÁO DỤC TRƯỜNG HỌC TRỰC TUYẾN - ONSCHOOL"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-cp-cong-nghe-giao-duc-truong-hoc-truc-tuyen-onschool/126682.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY CP CÔNG NGHỆ GIÁO DỤC TRƯỜNG HỌC TRỰC TUYẾN - ONSCHOOL
            </a>
          </h3>
          <div className="company-description">
            <p>
              " ONSCHOOL đơn vị hàng đầu cung cấp giải pháp chuyển đổi số toàn
              diện trong giáo dục.Xu hướng chuyển đổi số đang diễn ra mạnh mẽ ở
              khắp các ngành nghề và lĩnh vực khác nhau trong đó phải kể đến thị
              tường Edtech. Đón đầu xu hướng đó, ONSCHOOL đã được lập nên bởi
              một đội ngũ chuyên gia giàu kinh nghiệm, chuyên sâu trong lĩnh vực
              Công nghệ..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/fpt-information-system/157622.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/fpt-information-system-c4ab77dac324c88c3c31e9e8445eb9af-6548a811985a0.jpg"
                alt="FPT Information System"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/fpt-information-system/157622.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/fpt-information-system-0568949376dcab14abfb13e3e271447f-6548a75395c0b.jpg"
                alt="FPT Information System"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/fpt-information-system/157622.html"
              className="company-name"
              target="_blank"
            >
              FPT Information System
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Trong suốt 29 năm phát triển, Công ty Hệ thống Thông tin FPT
              (FPT Information System - FPT IS) là nhà tích hợp hệ thống, cung
              cấp giải pháp hàng đầu Việt Nam và khu vực. Sở hữu năng lực công
              nghệ được thừa nhận bởi các khách hàng và đối tác toàn cầu, FPT IS
              mang đến những dịch vụ và giải pháp phục vụ các lĩnh vực trọng..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/tap-doan-brg/1387.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/tap-doan-brg-b0610412b3cacc528f8ab845411a00da-62d625a19b9b2.jpg"
                alt="Tập đoàn BRG"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/tap-doan-brg/1387.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/tap-doan-brg-62f6156ccf143.jpg"
                alt="Tập đoàn BRG"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/tap-doan-brg/1387.html"
              className="company-name"
              target="_blank"
            >
              Tập đoàn BRG
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Là Tập đoàn kinh tế, dịch vụ tư nhân đa ngành hàng đầu Việt Nam,
              Tập đoàn BRG hiện đang cung cấp những sản phẩm và dịch vụ chất
              lượng cao trong các lĩnh vực như: Gôn; Bất động sản; Khách sạn -
              Nghỉ dưỡng; Vui chơi giải trí; Thương mại – Bán lẻ và Sản xuất
              công – nông nghiệp công nghệ cao đến với khách hàng trong nước..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-nguoi-ban-vang/21166.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-co-phan-nguoi-ban-vang-9167318c1370716a55560d6f43a79325-64058f6d095a9.jpg"
                alt="Công ty cổ phần Người Bạn Vàng"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-nguoi-ban-vang/21166.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-co-phan-nguoi-ban-vang-64058d8d39653.jpg"
                alt="Công ty cổ phần Người Bạn Vàng"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-nguoi-ban-vang/21166.html"
              className="company-name"
              target="_blank"
            >
              Công ty cổ phần Người Bạn Vàng
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Công Ty CP Người Bạn Vàng được thành lập năm 2017, tới 2018
              chúng tôi tự hào trở thành đối tác chiến lược của PNJ Việt
              Nam.Trải qua hơn 5 năm phát triển, cho tới hiện tại chuỗi Cầm đồ
              và Thu mua Người Bạn Vàng đã mở rộng mô hình cầm đồ hiện đại tới
              trên 25 tỉnh thành với 65 cửa hàng hoạt động. Người Bạn Vàng
              nhận..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/ngan-hang-thuong-mai-co-phan-ky-thuong-viet-nam/16716.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/ngan-hang-thuong-mai-co-phan-ky-thuong-viet-nam-3508205435ad162be297ecb853ad2e52-651407cde853a.jpg"
                alt="NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN KỸ THƯƠNG VIỆT NAM"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/ngan-hang-thuong-mai-co-phan-ky-thuong-viet-nam/16716.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/ngan-hang-thuong-mai-co-phan-ky-thuong-viet-nam-632bbf5a763f7.jpg"
                alt="NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN KỸ THƯƠNG VIỆT NAM"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/ngan-hang-thuong-mai-co-phan-ky-thuong-viet-nam/16716.html"
              className="company-name"
              target="_blank"
            >
              NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN KỸ THƯƠNG VIỆT NAM
            </a>
          </h3>
          <div className="company-description">
            <p>
              " GIỚI THIỆU CÔNG TY: Techcombank mang sứ mệnh dẫn dắt hành trình
              số hóa của ngành tài chính, tạo động lực cho mỗi cá nhân, doanh
              nghiệp và tổ chức phát triển bền vững và bứt phá thành công. Được
              thành lập vào tháng 9 năm 1993 và có trụ sở chính tại Hà Nội,
              Techcombank là một trong những ngân hàng thương mại cổ phần lớn
              nhất tại Việt..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam/20324.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-co-phan-giao-duc-amp-dao-tao-imap-viet-nam-00e5c5f8d6dcba97c61d6f9f309d1896-5f6abe680ae0d.jpg"
                alt="Công ty Cổ phần Giáo dục & Đào tạo IMAP Việt Nam"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam/20324.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam-5da97e1f22484.jpg"
                alt="Công ty Cổ phần Giáo dục & Đào tạo IMAP Việt Nam"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam/20324.html"
              className="company-name"
              target="_blank"
            >
              Công ty Cổ phần Giáo dục &amp; Đào tạo IMAP Việt Nam
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Công ty CP Giáo dục và Đào tạo IMAP Việt Nam với hệ thống các
              thương hiệu Anh ngữ Ms Hoa (Tiền thân Ms Hoa TOEIC) Ms Hoa Giao
              tiếp, IELTS Fighter, Aland English, IMAP Pro, Ms Hoa Junio,
              Globalway, IMAP Tech đang từng ngày lớn mạnh với hệ thống hơn 100
              cơ sở tại Hà Nội, TP HCM, Đà Nẵng, Nghệ An, Bắc Ninh, Bình Dương,
              Đồng Nai và..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-phat-trien-phan-mem-xay-dung-aureole/23839.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/1MUyAGzBFqi6PQ9mM0S3.jpg"
                alt="Công ty Phát triển Phần mềm Xây dựng Aureole"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-phat-trien-phan-mem-xay-dung-aureole/23839.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-phat-trien-phan-mem-xay-dung-aureole-5ef559f0a19ea.jpg"
                alt="Công ty Phát triển Phần mềm Xây dựng Aureole"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-phat-trien-phan-mem-xay-dung-aureole/23839.html"
              className="company-name"
              target="_blank"
            >
              Công ty Phát triển Phần mềm Xây dựng Aureole
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Được thành lập từ năm 2001, Công ty Aureole CSD INC - một công
              ty chuyên về ứng dụng phần mềm trong lĩnh vực xây dựng, đã khẳng
              định được vị trí của mình ở thị trường Nhật Bản với số lượng khách
              hàng ngày càng lớn. Với mục tiêu trở thành trung tâm CAD lớn nhất
              Việt Nam và mở rộng thị trường ra các nước Đông Nam Á,..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-buymed/30987.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-tnhh-buymed-f95dc7cac15325af4367f3c8cf5ee0f6-5ff7dd182c9d8.jpg"
                alt="CÔNG TY TNHH BUYMED"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-buymed/30987.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-buymed-1ba6aba7f7826b149fe5e4a9fa9d32b1-643fab9038a9a.jpg"
                alt="CÔNG TY TNHH BUYMED"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-buymed/30987.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY TNHH BUYMED
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Giới thiệu về thuocsi thuocsi.vn được thành lập từ năm 2018, là
              một trong những startup thành công trong lĩnh vực công nghệ về y
              tế Hiện tại là cổng điện tử cung cấp thuốc cho hơn 1.000 nhà thuốc
              và phòng khám trên khắp Việt Nam. Là một trong những nơi làm việc
              thu hút các tài năng trẻ với đam mê ứng dụng công nghệ 4.0 vào
              nền..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/to-chuc-giao-duc-quoc-te-langmaster/56.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/to-chuc-giao-duc-quoc-te-langmaster-f44fecaccf1e9a2ab87d0bc3e20ae78c-64afa1f357c8e.jpg"
                alt="Tổ chức Giáo dục quốc tế Langmaster"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/to-chuc-giao-duc-quoc-te-langmaster/56.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/95UMEz8Uvwsc56NdTRk47FFlBOBdPEmo_1689071248____d38d8958820f4415fa920481e68bbbee.jpg"
                alt="Tổ chức Giáo dục quốc tế Langmaster"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/to-chuc-giao-duc-quoc-te-langmaster/56.html"
              className="company-name"
              target="_blank"
            >
              Tổ chức Giáo dục quốc tế Langmaster
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Tổ chức giáo dục quốc tế Langmaster được thành lập nhằm giúp thế
              hệ trẻ Việt Nam bắt nhịp với xu hướng hội nhập quốc tế và nhu cầu
              sử dụng tiếng Anh sâu rộng qua các chương trình giáo dục.Bên cạnh
              đó, Langmaster mong muốn đem đến một môi trường làm việc giúp các
              bạn trẻ có thể trải nghiệm, vừa tích lũy được kinh nghiệm thực tế
              thay..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-xuat-nhap-khau-phat-trien-dong-duong-tap-doan-the-thao-kingsport/74033.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/TbzwIRdJSP5h9vPuEjRB.jpg"
                alt="CÔNG TY TNHH XUẤT NHẬP KHẨU PHÁT TRIỂN ĐÔNG DƯƠNG - TẬP ĐOÀN THỂ THAO KINGSPORT"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-xuat-nhap-khau-phat-trien-dong-duong-tap-doan-the-thao-kingsport/74033.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-xuat-nhap-khau-phat-trien-dong-duong-tap-doan-the-thao-kingsport-63bbc55e020e7.jpg"
                alt="CÔNG TY TNHH XUẤT NHẬP KHẨU PHÁT TRIỂN ĐÔNG DƯƠNG - TẬP ĐOÀN THỂ THAO KINGSPORT"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-xuat-nhap-khau-phat-trien-dong-duong-tap-doan-the-thao-kingsport/74033.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY TNHH XUẤT NHẬP KHẨU PHÁT TRIỂN ĐÔNG DƯƠNG - TẬP ĐOÀN THỂ
              THAO KINGSPORT
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Công ty TNHH XNK PT Đông Dương - Tập đoàn thể thao KINGSPORT
              được thành lập năm 2009 với nghành nghề kinh doanh chính: Kinh
              doanh thiết bị gia dụng &amp; hàng thể thao. Qua gần 12 năm phát
              triển hiện nay chúng tôi đã và đang là nhà cung cấp thiết bị thể
              thao lớn nhất Việt Nam với thương hiệu KINGSPORT, với hệ thống cửa
              hàng bán lẻ..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-tu-van-dao-tao-dai-duong/97592.html">
            <div className="cover-wraper">
              <img
                src="https://www.topcv.vn/images/default_cover/topcv_cover_1.jpg"
                className="img-fluid"
                alt="CÔNG TY TNHH TƯ VẤN & ĐÀO TẠO ĐẠI DƯƠNG"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-tu-van-dao-tao-dai-duong/97592.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/VcHGfKX477DToFxwKnJ9mW1v8YFhEhEk_1649920055____5107dabb0160776d57f4fdf975da7104.jpg"
                alt="CÔNG TY TNHH TƯ VẤN & ĐÀO TẠO ĐẠI DƯƠNG"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-tu-van-dao-tao-dai-duong/97592.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY TNHH TƯ VẤN &amp; ĐÀO TẠO ĐẠI DƯƠNG
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Công Ty TNHH Tư Vấn &amp; Đào Tạo Đại Dương có hệ thống đào tạo
              tin học với hàng ngàn máy tính, hàng chục ngàn học viên mỗi năm và
              nhiều chi nhánh trên toàn Tp.HCM.Nhằm triển khai nhiều cơ sở tại
              HCM và các tỉnh thành lân cận Tp.HCM. Tin Học Đại Dương cần tuyển
              nhân sự toàn thời gian hoặc bán thời gian làm việc linh hoạt
              theo..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-tap-doan-dau-tu-v-o-i/72475.html">
            <div className="cover-wraper">
              <img
                src="https://www.topcv.vn/images/default_cover/topcv_cover_1.jpg"
                className="img-fluid"
                alt="CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ V.O.I"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-tap-doan-dau-tu-v-o-i/72475.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/b8454a743939b0b62feca67724d05a51-60ecfca7cba1e.jpg"
                alt="CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ V.O.I"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-tap-doan-dau-tu-v-o-i/72475.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ V.O.I
            </a>
          </h3>
          <div className="company-description">
            <p>
              " CÂU CHUYỆN VỀ CHÚNG TÔICông ty Cổ phần Đầu tư phát triển du lịch
              RAVI ra đời dựa trên sự hợp tác chiến lược giữa các chủ đầu tư có
              hơn 15 năm phát triển các dự án Bất động sản nghỉ dưỡng và đơn vị
              triển khai gói kỳ nghỉ số một Việt Nam - V.O.I Group.RAVI định
              hướng phát triển trở thành đơn vị đi tiên phong trong..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-stringee/75841.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-co-phan-stringee-f9de9cc917adadc821d4b14babda2493-65126366d58d0.jpg"
                alt="CÔNG TY CỔ PHẦN STRINGEE"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-stringee/75841.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/b6a9197abf1fb50d875a1aa78ce6baea-61480a5153262.jpg"
                alt="CÔNG TY CỔ PHẦN STRINGEE"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-stringee/75841.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY CỔ PHẦN STRINGEE
            </a>
          </h3>
          <div className="company-description">
            <p>
              " ●&nbsp; Stringee là công ty Tech Startup về Communication APIs,
              chuyên nghiên cứu và phát triển công nghệ về voice/video
              streaming: peer-to-peer voice/video call, voice/video conference,
              call-out/call-in (SIP), WebRTC,…● Stringee cung cấp nền tảng/APIs
              cho các lập trình viên, doanh nghiệp có thể nhanh chóng thêm các
              tính năng vào ứng dụng hoặc website của họ như: gọi điện
              (voice/video), gọi nhóm (voice/video), gọi ra/vào số điện thoại
              GSM/PSTN,…● Ngoài..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/ngan-hang-thuong-mai-co-phan-quoc-te-viet-nam/51123.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/BL6ef3SJULpJu4nT7R66.jpg"
                alt="Ngân Hàng Thương Mại Cổ Phần Quốc Tế Việt Nam"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/ngan-hang-thuong-mai-co-phan-quoc-te-viet-nam/51123.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/beac8465d62ef14e651a81e546dd9986-5fe1a719810ff.jpg"
                alt="Ngân Hàng Thương Mại Cổ Phần Quốc Tế Việt Nam"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/ngan-hang-thuong-mai-co-phan-quoc-te-viet-nam/51123.html"
              className="company-name"
              target="_blank"
            >
              Ngân Hàng Thương Mại Cổ Phần Quốc Tế Việt Nam
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Ngân hàng TMCP Quốc Tế Việt Nam, tên viết tắt là Ngân hàng Quốc
              Tế (VIB) được thành lập ngày 18 tháng 9 năm 1996, trụ sở đặt tại
              111A Pasteur, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh.​Đến ngày
              31/12/2018, sau 22 năm hoạt động, VIB đã trở thành một trong những
              ngân hàng TMCP hàng đầu Việt Nam với tổng tài sản đạt 139 nghìn tỷ
              đồng,..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-transcosmos-viet-nam/19361.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-tnhh-transcosmos-viet-nam-f3db69d527d6a14f54ad705074c1ed94-645b060e963eb.jpg"
                alt="Công Ty TNHH TransCosmos Việt Nam"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-transcosmos-viet-nam/19361.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-transcosmos-viet-nam-63f70af7037aa.jpg"
                alt="Công Ty TNHH TransCosmos Việt Nam"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-transcosmos-viet-nam/19361.html"
              className="company-name"
              target="_blank"
            >
              Công Ty TNHH TransCosmos Việt Nam
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Tập đoàn Transcosmos chính thức thành lập Công ty TNHH
              Transcosmos Việt Nam vào tháng 3 năm 2014 với trụ sở chính tại Hà
              Nội, Việt Nam; Đại diện: Yohei Komura. Khai trương Trung tâm Hồ
              Chí Minh số 1 vào tháng 10 năm 2015, tiếp theo là Trung tâm Hồ Chí
              Minh số 2 vào tháng 3 năm 2017 và Trung tâm Hồ Chí Minh số 3 vào
              tháng..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-transcosmos-viet-nam/39855.html">
            <div className="cover-wraper">
              <img
                src="https://www.topcv.vn/images/default_cover/topcv_cover_5.jpg"
                className="img-fluid"
                alt="Công ty TNHH transcosmos Việt Nam"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-transcosmos-viet-nam/39855.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-transcosmos-viet-nam-61c9331426cc8.jpg"
                alt="Công ty TNHH transcosmos Việt Nam"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-transcosmos-viet-nam/39855.html"
              className="company-name"
              target="_blank"
            >
              Công ty TNHH transcosmos Việt Nam
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Công ty transcosmos Vietnam là Công ty 100% vốn đầu tư của tập
              đoàn Transcosmos Nhật Bản. Chúng tôi cung cấp các dịch vụ BPO cũng
              như dịch vụ chăm sóc khách hàng cho thị trường trong và ngoài Viêt
              Nam. Về dịch vụ BPO, chúng tôi triển khai dịch vụ Offshore hỗ trợ
              khai thác, thiết kế nhắm tới đối tượng ngành sản xuất xe hơi, máy
              bay, xây..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-bao-hiem-nhan-tho-sun-life-viet-nam/94257.html">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-tnhh-bao-hiem-nhan-tho-sun-life-viet-nam-022d4621ed887547eb3e584eee1f2705-638da937556f5.jpg"
                alt="CÔNG TY TNHH BẢO HIỂM NHÂN THỌ SUN LIFE VIỆT NAM"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-bao-hiem-nhan-tho-sun-life-viet-nam/94257.html">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/vOiPmBcYPansoc37ngmS79JgMCpicpIR_1697800694____599a584d3107285310f2e494bc401e9a.jpg"
                alt="CÔNG TY TNHH BẢO HIỂM NHÂN THỌ SUN LIFE VIỆT NAM"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-bao-hiem-nhan-tho-sun-life-viet-nam/94257.html"
              className="company-name"
              target="_blank"
            >
              CÔNG TY TNHH BẢO HIỂM NHÂN THỌ SUN LIFE VIỆT NAM
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Sun Life Việt Nam là công ty bảo hiểm nhân thọ 100% vốn từ Tập
              đoàn Sun Life (Canada). Công ty hướng đến mục đích giúp Khách hàng
              đạt được an toàn tài chính trọn đời và tận hưởng cuộc sống khoẻ
              mạnh hơn. Sun Life Việt Nam là công ty tiên phong và dẫn đầu thị
              trường trong lĩnh vực bảo hiểm hưu trí, phục vụ cho cả Khách..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/alma1">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/iBFOjYmzKzY9i37pWMEk.jpg"
                alt="Công ty TNHH Khu Du Lịch Vịnh Thiên Đường (ALMA)"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/alma1">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-khu-du-lich-vinh-thien-duong-alma-591a6f04eae05_rs.jpg"
                alt="Công ty TNHH Khu Du Lịch Vịnh Thiên Đường (ALMA)"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/alma1"
              className="company-name"
              target="_blank"
            >
              Công ty TNHH Khu Du Lịch Vịnh Thiên Đường (ALMA)
            </a>
          </h3>
          <div className="company-description">
            <p>
              " ALMA resort là dự án nghỉ dưỡng cao cấp dành riêng cho các gia
              đình được đầu tư và phát triển bởi Công ty TNHH Khu Du Lịch Vịnh
              Thiên Đường.Với vai trò là nhà tiên phong tại Việt Nam mang đến mô
              hình nghỉ dưỡng vượt trội, đáp ứng các nhu cầu nghỉ ngơi thư giãn
              đa dạng của các thế hệ, ALMA là một trong số ít các..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/concentrix">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/DdzvuyJVOuBcILv9oMI5.jpg"
                alt="Công ty TNHH Concentrix Service Vietnam"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/concentrix">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-concentrix-service-vietnam-a963cac26074348bc95ce4bf90dc9fb1-6423dfbc43963.jpg"
                alt="Công ty TNHH Concentrix Service Vietnam"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/concentrix"
              className="company-name"
              target="_blank"
            >
              Công ty TNHH Concentrix Service Vietnam
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Concentrix là một công ty hàng đầu thế giới của Mỹ trong lĩnh
              vực dịch vụ chăm sóc khách hàng có mặt ở trên 44 quốc gia với tổng
              số nhân sự lên tới trên 250.000 nhân viên.Concentrix Việt Nam luôn
              đầu tư và nỗ lực nhằm cung cấp môi trường tốt nhất như:Cơ hội học
              hỏi &amp; phát triểnKết nối thường xuyên với nhân viên, tạo môi
              trường tốt..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/mtlhealthpost">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-tnhh-mtl-healthpost-1bbea906e0cc190dde4220fd3f2a6061-643585302179f.jpg"
                alt="CÔNG TY TNHH MTV HEALTHPOST"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/mtlhealthpost">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-mtl-healthpost-bf7e42e68b58c72df1cc75b0d81db253-6440dd2bde140.jpg"
                alt="CÔNG TY TNHH MTV HEALTHPOST"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/mtlhealthpost"
              className="company-name"
              target="_blank"
            >
              CÔNG TY TNHH MTV HEALTHPOST
            </a>
          </h3>
          <div className="company-description">
            <p>
              " CÔNG TY TNHH MTV HEALTHPOST là một công ty hoạt động trong lĩnh
              vực Call Center - Trung tâm Tổng đài, chú trọng nhiều về
              Telesales. Với sứ mệnh đem đến những dòng sản phẩm có nguồn gốc từ
              thiên nhiên, chăm sóc sắc đẹp và sức khỏe dinh dưỡng, HEALTHPOST
              đã không ngừng cải tiến bản thân để ngày một tốt hơn và mang lại
              giải pháp tối ưu..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/chailease">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-cho-thue-tai-chinh-tnhh-mtv-quoc-te-chailease-faaaab73a31c881be517e4d50fc0bef2-6324407085818.jpg"
                alt="Công ty Cho thuê tài chính TNHH MTV Quốc tế Chailease"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/chailease">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-cho-thue-tai-chinh-tnhh-mtv-quoc-te-chailease-5dc39f3d07275.jpg"
                alt="Công ty Cho thuê tài chính TNHH MTV Quốc tế Chailease"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/chailease"
              className="company-name"
              target="_blank"
            >
              Công ty Cho thuê tài chính TNHH MTV Quốc tế Chailease
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Công ty Cho Thuê Tài Chính TNHH Một Thành Viên Quốc Tế Chailease
              (""CILC"") là tổ chức tín dụng 100% vốn nước ngoài thuộc Chailease
              Finance Group – là tập đoàn cho thuê tài chính hàng đầu ở Đài Loan
              với hơn 40 năm kinh nghiệm và có hoạt động kinh doanh tại các quốc
              gia thuộc lãnh thổ Trung Quốc, Đài Loan, Châu Á Thái Bình Dương và
              Hoa..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/vegaholidays">
            <div className="cover-wraper">
              <img
                src="https://www.topcv.vn/images/default_cover/topcv_cover_2.jpg"
                className="img-fluid"
                alt="Công ty Cổ phần Vega Holidays"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/vegaholidays">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-co-phan-vega-holidays-4a1a18a2a4b64f5573c12d4f822ead08-651d240a4b907.jpg"
                alt="Công ty Cổ phần Vega Holidays"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/vegaholidays"
              className="company-name"
              target="_blank"
            >
              Công ty Cổ phần Vega Holidays
            </a>
          </h3>
          <div className="company-description">
            <p>
              " "Khởi nguồn và phát triển hơn một thập kỷ, KDI Holdings hiện là
              tập đoàn đầu tư uy tín hàng đầu, hoạt động mạnh mẽ trong nhiều
              lĩnh vực khác nhau mà trong đó trọng tâm là Siêu Dự án Vega City
              Nha Trang - Khu nghỉ dưỡng phức hợp duy nhất có vị trí gần trung
              tâm Tp. Nha Trang. Cuối năm 2022, hướng tới mục tiêu tăng
              trưởng..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/vusmienbac">
            <div className="cover-wraper">
              <img
                src="https://www.topcv.vn/images/default_cover/topcv_cover_2.jpg"
                className="img-fluid"
                alt="CÔNG TY TNHH TRUNG TÂM ANH NGỮ VUS MIỀN BẮC"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/vusmienbac">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/aLqYlCplxD7vv8QPPLYJJV4opX1u36bX_1658204941____e28a56536a553ead0529358e3199fa68.png"
                alt="CÔNG TY TNHH TRUNG TÂM ANH NGỮ VUS MIỀN BẮC"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/vusmienbac"
              className="company-name"
              target="_blank"
            >
              CÔNG TY TNHH TRUNG TÂM ANH NGỮ VUS MIỀN BẮC
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Anh Văn Hội Việt Mỹ VUS là hệ thống giáo dục hàng đầu Việt Nam.
              Đến nay, hệ thống đã phát triển rộng khắp với 60 cơ sở toàn quốc,
              đặc biệt là các thành phố trọng điểm như: Hồ Chí Minh. Hà Nội, Đà
              Nẵng, Bình Dương, Đồng Nai, Vũng Tàu, Buôn Ma Thuột, Cần Thơ, Tây
              Ninh, Vĩnh Long,...&nbsp;Hiện nay, VUS có hơn 1000 nhân sự
              hành..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/vuihoc">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/vuihocvn-5ab6b290a80059d251b10ca2b2fc63b7-648c12f2f29d4.jpg"
                alt="VUIHOC.vn"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/vuihoc">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/mUyofsckMXP3yzizOUHPwHfY8D59Yttp_1687234000____832d24e7c60703094b8d0922161d91a7.png"
                alt="VUIHOC.vn"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/vuihoc"
              className="company-name"
              target="_blank"
            >
              VUIHOC.vn
            </a>
          </h3>
          <div className="company-description">
            <p>
              " VUIHOC là trường học trực tuyến cho học sinh từ lớp 1 đến lớp 12
              với sứ mệnh "đem cơ hội tiếp cận bình đẳng các chương trình giáo
              dục chất lượng cao, chi phí hợp lý tới học sinh trên mọi miền tổ
              quốc”. Ra mắt vào năm 2019, VUIHOC đã nhanh chóng phát triển và
              trở thành nền tảng Edtech (Giáo dục - Công nghệ) hàng đầu tại..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/congnghiepvienthongquandoi">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/tap-doan-cong-nghiep-vien-thong-quan-doi-e3c6e7727df189e29507b150c6a7d893-64c328ef424bd.jpg"
                alt="TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/congnghiepvienthongquandoi">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/tap-doan-cong-nghiep-vien-thong-quan-doi-6417bb41bf793.jpg"
                alt="TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/congnghiepvienthongquandoi"
              className="company-name"
              target="_blank"
            >
              TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Tập đoàn Viễn thông Quân đội Viettel - giữ vững vị thế Nơi làm
              việc tốt nhất Việt Nam trong 06 năm liên tiếp trong ngành Viễn
              thông, Hạ tầng, IT (theo khảo sát Anphabe) là nhà cung cấp dịch vụ
              số toàn cầu, luôn đi đầu trong đổi mới sáng tạo và luôn lắng nghe,
              thấu hiểu để đem tới những dịch vụ tốt nhất cho khách hàng.
              Viettel..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/chinhanhtranscosmoshochiminh">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/chi-nhanh-cong-ty-tnhh-transcosmos-viet-nam-tai-thanh-pho-ho-chi-minh-ada1d9785e55510bfafebcee8063bd3e-64c9c00f9d081.jpg"
                alt="CHI NHÁNH CÔNG TY TNHH TRANSCOSMOS VIỆT NAM TẠI THÀNH PHỐ HỒ CHÍ MINH"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/chinhanhtranscosmoshochiminh">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/chi-nhanh-cong-ty-tnhh-transcosmos-viet-nam-tai-thanh-pho-ho-chi-minh-f77206d9f4d31351ef1f44344b5404f8-64c9bfe1ad406.jpg"
                alt="CHI NHÁNH CÔNG TY TNHH TRANSCOSMOS VIỆT NAM TẠI THÀNH PHỐ HỒ CHÍ MINH"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/chinhanhtranscosmoshochiminh"
              className="company-name"
              target="_blank"
            >
              CHI NHÁNH CÔNG TY TNHH TRANSCOSMOS VIỆT NAM TẠI THÀNH PHỐ HỒ CHÍ
              MINH
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Gia nhập thị trường Việt Nam vào năm 2014 với trụ sở chính ở Hà
              Nội, transcosmos Việt Nam đã góp phần nâng tầm cho thị trường BPO
              Việt Nam. Với sự phát triển ổn định và chất lượng được đảm bảo từ
              việc kế thừa các quy chuẩn từ tập đoàn - transcosmos Incooperate,
              Nhật Bản, chúng tôi đã trở thành sự lựa chọn của nhiều tại Việt
              Nam..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/vus-etsc">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/hVjYUVlNzA7tz9HCIwrh.jpg"
                alt="CÔNG TY CỔ PHẦN QUỐC TẾ ANH VĂN HỘI VIỆT MỸ"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/vus-etsc">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-co-phan-quoc-te-anh-van-hoi-viet-my-e0d439adc2703dcefe8a18361a7438e1-6462eeed6fb8f.jpg"
                alt="CÔNG TY CỔ PHẦN QUỐC TẾ ANH VĂN HỘI VIỆT MỸ"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/vus-etsc"
              className="company-name"
              target="_blank"
            >
              CÔNG TY CỔ PHẦN QUỐC TẾ ANH VĂN HỘI VIỆT MỸ
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Anh Văn Hội Việt Mỹ VUS là hệ thống giáo dục hàng đầu Việt Nam.
              Đến nay, hệ thống đã phát triển rộng khắp với 60 cơ sở toàn quốc,
              đặc biệt là các thành phố trọng điểm như: Hồ Chí Minh. Hà Nội, Đà
              Nẵng, Bình Dương, Đồng Nai, Vũng Tàu, Buôn Ma Thuột, Cần Thơ, Tây
              Ninh, Vĩnh Long,... Hiện nay, VUS có hơn 1000 nhân sự hành..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/tekyholdings">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/cong-ty-co-phan-cong-nghe-amp-sang-tao-tre-teky-holdings-c5f4313d832183d2c54aa1530608d27a-6487f4acb2221.jpg"
                alt="CÔNG TY CỔ PHẦN CÔNG NGHỆ & SÁNG TẠO TRẺ TEKY HOLDINGS"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/tekyholdings">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/cong-ty-co-phan-cong-nghe-sang-tao-tre-teky-holdings-6297130b27e96.jpg"
                alt="CÔNG TY CỔ PHẦN CÔNG NGHỆ & SÁNG TẠO TRẺ TEKY HOLDINGS"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/tekyholdings"
              className="company-name"
              target="_blank"
            >
              CÔNG TY CỔ PHẦN CÔNG NGHỆ &amp; SÁNG TẠO TRẺ TEKY HOLDINGS
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Young can do ITTEKY là Tổ chức giáo dục công nghệ STEAM K12
              chuẩn Mỹ tiên phong và dẫn đầu tại Việt Nam với hệ sinh thái Học
              viện - Nền tảng edtech - Hợp tác trường, nhằm thực hiện sứ mệnh
              Đổi mới giáo dục, mang đến cho thế hệ trẻ Việt Nam kiến thức toàn
              diện về STEAM (Science - Technology - Engineering - Art - Math),
              đặc..."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="box-company item-hover">
        <div className="company-banner">
          <a href="https://www.topcv.vn/brand/fptedu">
            <div className="cover-wraper">
              <img
                src="https://static.topcv.vn/company_covers/lUyQdNAmxJZv1BohmAOa.jpg"
                alt="TỔ CHỨC GIÁO DỤC FPT"
                className="img-fluid"
              />
            </div>
          </a>
          <div className="company-logo">
            <a href="https://www.topcv.vn/brand/fptedu">
              <img
                className="img-fluid"
                src="https://static.topcv.vn/company_logos/69iEFNHI0d8edsYdTDgV.jpg"
                alt="TỔ CHỨC GIÁO DỤC FPT"
              />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h3>
            <a
              href="https://www.topcv.vn/brand/fptedu"
              className="company-name"
              target="_blank"
            >
              TỔ CHỨC GIÁO DỤC FPT
            </a>
          </h3>
          <div className="company-description">
            <p>
              " Thành lập năm 1999, Tổ chức Giáo dục FPT (FPT Education) là một
              trong các đơn vị thành viên của Tập đoàn FPT – Tập đoàn tiên phong
              trong lĩnh vực công nghệ thông tin của Việt Nam. 1. Sứ mệnh Cung
              cấp năng lực cạnh tranh toàn cầu cho đông đảo người học, góp phần
              mở mang bờ cõi trí tuệ đất nước. 2. Tầm nhìn Trở thành một..."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-12"></div>
  </div>
</div>


                        <div className="company-content__btn">
                            <button className="company-content__btn-more">
                                Xem thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company
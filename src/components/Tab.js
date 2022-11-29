import { useState } from "react";
import ImgBox from "./ImgBox";
import Button from "./Button";

function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  function tabClickHandler(index) {
    setActiveIndex(index);
  }

  const tabContArr = [
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="엔터"
          onClick={() => tabClickHandler(0)}
        ></Button>
      ),
      // <button onClick={() => tabClickHandler(0)}>엔터</button>,
      tabCont: (
        <ImgBox
          // display="flex"
          name="entertain-2"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMThfMTE5%2FMDAxNjAyOTk3MDgxNDY0.VPUpt5grvhpbkkfCZE-G_ii2FEnLxTJ1FycLl0mgLuAg.NLP-gvpmIDf-dzS0b-vNC3N1KJ3ocRsbFme_VIFX4j0g.JPEG.ish9101%2FIMG_0257.JPG&type=a340"
          alt="엔터"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTdfMjk1%2FMDAxNjQ1MDkxNTk4NDcz.aPf3qR72s3CGZO53pGzx4qvLVPJmd9csk12hj_Jt-x4g.qFiYdCvwYXhGFjFJ5PJkusmpAGGXnK-bqe5vM0wsBrwg.JPEG.coooool1215%2F1645027984.jpg&type=a340"
        ></ImgBox>

        // <ImgBox />
      ),
    },
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="스포츠"
          onClick={() => tabClickHandler(1)}
        ></Button>
      ),
      tabCont: (
        <ImgBox
          name="sports-2"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F108%2F2022%2F10%2F27%2F0003099989_005_20221027101202443.jpg&type=a340"
          alt="스포츠"
          src2="https://images.unsplash.com/photo-1531001602318-1916852b9205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FrZWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ></ImgBox>
        // <div>
        //   <img src="" alt="스포츠" />
        // </div>
      ),
    },
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="자동차"
          onClick={() => tabClickHandler(2)}
        ></Button>
      ),
      tabCont: (
        <ImgBox
          name="car-2"
          src="https://images.unsplash.com/photo-1610192804837-fb021b82b54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlbnolMjBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="자동차"
          src2="https://images.unsplash.com/photo-1604946881982-a3321fcf07f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVudGxleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ></ImgBox>
      ),
    },
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="웹툰"
          onClick={() => tabClickHandler(3)}
        ></Button>
      ),
      tabCont: (
        <ImgBox
          name="webtoon-2"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjdfMTY3%2FMDAxNjQwNjA3OTEzMDky.ACcC_IJimVUFxj8y2M017mlZmPjkJCf4TuPufUrCnu4g.Jvda_ST8HAb82Uka5W-1K-EsTp40uGBWHPDrWngkZUQg.JPEG.ss5258%2Fwaho0043.jpg&type=a340"
          alt="웹툰"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130408_253%2Fdanteknight_1365401088747lkJTx_JPEG%2F2013-04-08_14%253B43%253B23.jpg&type=a340"
        ></ImgBox>
      ),
    },
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="경제"
          onClick={() => tabClickHandler(4)}
        ></Button>
      ),
      tabCont: (
        <ImgBox
          name="economy-2"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDdfMzIg%2FMDAxNjY1MTUxMDM4OTUw.ynWhII0B-qmCSINt1IZlwZSLF_nz6ZYwWMoNsl0iqhwg._-CnQKpVG0qbCX_1MBLVt27fdYr5Yg-TvYKSCOnD5lkg.PNG.sadd2959%2Fimage.png&type=l340_165"
          alt="경제"
          src2="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Yml0Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ></ImgBox>
      ),
    },
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="추천/구독"
          onClick={() => tabClickHandler(5)}
        ></Button>
      ),
      tabCont: (
        <ImgBox
          name="ott-2"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjFfMjE2%2FMDAxNjY4OTkyMjY1MjY3.u9WCeDgPZ-xvHZCwWzX8sYqyFwwmdOZZ9zGUc3URaCgg.DuRSE8mKy7YCFxxYdTg51yliJwahkDikg2AEXiIa0AQg.JPEG.tech-plus%2F01_OTT_platform.jpg&type=a340"
          alt="추천/구독"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTlfMjE5%2FMDAxNjQ1MjEwODAyMzM0.ygMU7HrQeDnVtF7TRXn6Q73gCMf6kjuj4L70IFG2jrEg.luvu97ykNzdrvHTUGbqe8A-8mk3J2hQy4gcBj-BqWCwg.JPEG.20min_830%2FOTT.jpg&type=a340"
        ></ImgBox>
      ),
    },
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="레시피"
          onClick={() => tabClickHandler(6)}
        ></Button>
      ),
      tabCont: (
        <ImgBox
          name="recipe-2"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTVfMjEg%2FMDAxNjY1Nzg0OTM5Mjk4.UpKWeen_l816GRoY5514fu7PvApRZTQ8WbzmuFrBvO0g.NXCXaUy_ptayjlFiCRVxMEfzvFZx0dTmtpvmwdOyBucg.JPEG.1524sck%2F%25C2%25FC%25C4%25A1_%25B1%25E8%25C4%25A1%25C2%25EE%25B0%25B3_%25B8%25C0%25C0%25D6%25B0%25D4_%25B2%25FA%25C0%25CC%25B4%25C2%25B9%25FD_%25B0%25ED%25C3%25DF%25C2%25FC%25C4%25A1_%25B1%25E8%25C4%25A1%25C2%25EE%25B0%25B3_%25BF%25E4%25B8%25AE_%25B7%25B9%25BD%25C3%25C7%25C7_02.JPG&type=a340"
          alt="레시피"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTZfNjkg%2FMDAxNjQyMjk4NTQxNjAw.mhWOrbGX6ORd01hJxliUeTarzmRu4_Yw4btDBkEWJrAg.Dvd9LlJ5FYD-wHgzt4nEdv9-1BbovKtrL2HBW0ySH9Mg.PNG.po09back%2F1642261724020.png&type=a340"
        ></ImgBox>
      ),
    },
    {
      tabTitle: (
        <Button
          className="btn-box"
          children="리빙"
          onClick={() => tabClickHandler(7)}
        ></Button>
      ),
      tabCont: (
        <ImgBox
          name="living-2"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDhfNDMg%2FMDAxNjY3ODc2MjU5NDQz.AfRyYWCaSdhzDy10iHkfdXz5Gx-fxOiIROWOwu9GxD0g.7tqaabGHxKz2StDuhiwu_9iULbDIZsuXRHB7TN8VIOcg.JPEG.apple102810%2F5.jpg&type=a340"
          alt="리빙"
          src2="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200318_147%2F1584510601663txDdP_JPEG%2F95_jZHQ76yti8C4WxY76ivMO.jpg&type=a340"
        ></ImgBox>
      ),
    },
  ];

  return (
    <div>
      <div className="category">
        {tabContArr.map((section) => {
          return section.tabTitle;
        })}
      </div>

      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}

export default Tab;

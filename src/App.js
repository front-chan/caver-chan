import React from "react";
import "./App.css";
import Tab from "./components/Tab";
import Button from "./components/Button";
import ImgBox from "./components/ImgBox";

function App() {
  function enterChange() {
    document.querySelector(".entertain").style.display = "flex";
    document.querySelector(".sports").style.display = "none";
    document.querySelector(".car").style.display = "none";
    document.querySelector(".webtoon").style.display = "none";
    document.querySelector(".economy").style.display = "none";
    document.querySelector(".ott").style.display = "none";
    document.querySelector(".recipe").style.display = "none";
    document.querySelector(".living").style.display = "none";
  }

  function sportsChange() {
    document.querySelector(".entertain").style.display = "none";
    document.querySelector(".sports").style.display = "flex";
    document.querySelector(".car").style.display = "none";
    document.querySelector(".webtoon").style.display = "none";
    document.querySelector(".economy").style.display = "none";
    document.querySelector(".ott").style.display = "none";
    document.querySelector(".recipe").style.display = "none";
    document.querySelector(".living").style.display = "none";
  }

  function carChange() {
    document.querySelector(".entertain").style.display = "none";
    document.querySelector(".sports").style.display = "none";
    document.querySelector(".car").style.display = "flex";
    document.querySelector(".webtoon").style.display = "none";
    document.querySelector(".economy").style.display = "none";
    document.querySelector(".ott").style.display = "none";
    document.querySelector(".recipe").style.display = "none";
    document.querySelector(".living").style.display = "none";
  }

  function webtoonChange() {
    document.querySelector(".entertain").style.display = "none";
    document.querySelector(".sports").style.display = "none";
    document.querySelector(".car").style.display = "none";
    document.querySelector(".webtoon").style.display = "flex";
    document.querySelector(".economy").style.display = "none";
    document.querySelector(".ott").style.display = "none";
    document.querySelector(".recipe").style.display = "none";
    document.querySelector(".living").style.display = "none";
  }

  function economyChange() {
    document.querySelector(".entertain").style.display = "none";
    document.querySelector(".sports").style.display = "none";
    document.querySelector(".car").style.display = "none";
    document.querySelector(".webtoon").style.display = "none";
    document.querySelector(".economy").style.display = "flex";
    document.querySelector(".ott").style.display = "none";
    document.querySelector(".recipe").style.display = "none";
    document.querySelector(".living").style.display = "none";
  }

  function ottChange() {
    document.querySelector(".entertain").style.display = "none";
    document.querySelector(".sports").style.display = "none";
    document.querySelector(".car").style.display = "none";
    document.querySelector(".webtoon").style.display = "none";
    document.querySelector(".economy").style.display = "none";
    document.querySelector(".ott").style.display = "flex";
    document.querySelector(".recipe").style.display = "none";
    document.querySelector(".living").style.display = "none";
  }

  function recipeChange() {
    document.querySelector(".entertain").style.display = "none";
    document.querySelector(".sports").style.display = "none";
    document.querySelector(".car").style.display = "none";
    document.querySelector(".webtoon").style.display = "none";
    document.querySelector(".economy").style.display = "none";
    document.querySelector(".ott").style.display = "none";
    document.querySelector(".recipe").style.display = "flex";
    document.querySelector(".living").style.display = "none";
  }

  function livingChange() {
    document.querySelector(".entertain").style.display = "none";
    document.querySelector(".sports").style.display = "none";
    document.querySelector(".car").style.display = "none";
    document.querySelector(".webtoon").style.display = "none";
    document.querySelector(".economy").style.display = "none";
    document.querySelector(".ott").style.display = "none";
    document.querySelector(".recipe").style.display = "none";
    document.querySelector(".living").style.display = "flex";
  }

  return (
    <div>
      <div className="new-data">
        <h1>DOM 사용</h1>
        <h2>📖오늘 읽을만한 글</h2>
        <div className="category">
          <Button onClick={enterChange} children={"엔터"}></Button>
          <Button onClick={sportsChange} children={"스포츠"}></Button>
          <Button onClick={carChange} children={"자동차"}></Button>
          <Button onClick={webtoonChange} children={"웹툰"}></Button>
          <Button onClick={economyChange} children={"경제"}></Button>
          <Button onClick={ottChange} children={"추천/구독"}></Button>
          <Button onClick={recipeChange} children={"레시피"}></Button>
          <Button onClick={livingChange} children={"리빙"}></Button>
        </div>
        <ImgBox
          display="flex"
          name="entertain"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMThfMTE5%2FMDAxNjAyOTk3MDgxNDY0.VPUpt5grvhpbkkfCZE-G_ii2FEnLxTJ1FycLl0mgLuAg.NLP-gvpmIDf-dzS0b-vNC3N1KJ3ocRsbFme_VIFX4j0g.JPEG.ish9101%2FIMG_0257.JPG&type=a340"
          alt="엔터"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTdfMjk1%2FMDAxNjQ1MDkxNTk4NDcz.aPf3qR72s3CGZO53pGzx4qvLVPJmd9csk12hj_Jt-x4g.qFiYdCvwYXhGFjFJ5PJkusmpAGGXnK-bqe5vM0wsBrwg.JPEG.coooool1215%2F1645027984.jpg&type=a340"
        ></ImgBox>
        <ImgBox
          name="sports"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F108%2F2022%2F10%2F27%2F0003099989_005_20221027101202443.jpg&type=a340"
          alt="스포츠"
          src2="https://images.unsplash.com/photo-1531001602318-1916852b9205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FrZWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ></ImgBox>
        <ImgBox
          name="car"
          src="https://images.unsplash.com/photo-1610192804837-fb021b82b54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlbnolMjBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="자동차"
          src2="https://images.unsplash.com/photo-1604946881982-a3321fcf07f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVudGxleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ></ImgBox>
        <ImgBox
          name="webtoon"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjdfMTY3%2FMDAxNjQwNjA3OTEzMDky.ACcC_IJimVUFxj8y2M017mlZmPjkJCf4TuPufUrCnu4g.Jvda_ST8HAb82Uka5W-1K-EsTp40uGBWHPDrWngkZUQg.JPEG.ss5258%2Fwaho0043.jpg&type=a340"
          alt="웹툰"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130408_253%2Fdanteknight_1365401088747lkJTx_JPEG%2F2013-04-08_14%253B43%253B23.jpg&type=a340"
        ></ImgBox>
        <ImgBox
          name="economy"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDdfMzIg%2FMDAxNjY1MTUxMDM4OTUw.ynWhII0B-qmCSINt1IZlwZSLF_nz6ZYwWMoNsl0iqhwg._-CnQKpVG0qbCX_1MBLVt27fdYr5Yg-TvYKSCOnD5lkg.PNG.sadd2959%2Fimage.png&type=l340_165"
          alt="경제"
          src2="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Yml0Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ></ImgBox>
        <ImgBox
          name="ott"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjFfMjE2%2FMDAxNjY4OTkyMjY1MjY3.u9WCeDgPZ-xvHZCwWzX8sYqyFwwmdOZZ9zGUc3URaCgg.DuRSE8mKy7YCFxxYdTg51yliJwahkDikg2AEXiIa0AQg.JPEG.tech-plus%2F01_OTT_platform.jpg&type=a340"
          alt="추천/구독"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTlfMjE5%2FMDAxNjQ1MjEwODAyMzM0.ygMU7HrQeDnVtF7TRXn6Q73gCMf6kjuj4L70IFG2jrEg.luvu97ykNzdrvHTUGbqe8A-8mk3J2hQy4gcBj-BqWCwg.JPEG.20min_830%2FOTT.jpg&type=a340"
        ></ImgBox>
        <ImgBox
          name="recipe"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTVfMjEg%2FMDAxNjY1Nzg0OTM5Mjk4.UpKWeen_l816GRoY5514fu7PvApRZTQ8WbzmuFrBvO0g.NXCXaUy_ptayjlFiCRVxMEfzvFZx0dTmtpvmwdOyBucg.JPEG.1524sck%2F%25C2%25FC%25C4%25A1_%25B1%25E8%25C4%25A1%25C2%25EE%25B0%25B3_%25B8%25C0%25C0%25D6%25B0%25D4_%25B2%25FA%25C0%25CC%25B4%25C2%25B9%25FD_%25B0%25ED%25C3%25DF%25C2%25FC%25C4%25A1_%25B1%25E8%25C4%25A1%25C2%25EE%25B0%25B3_%25BF%25E4%25B8%25AE_%25B7%25B9%25BD%25C3%25C7%25C7_02.JPG&type=a340"
          alt="레시피"
          src2="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTZfNjkg%2FMDAxNjQyMjk4NTQxNjAw.mhWOrbGX6ORd01hJxliUeTarzmRu4_Yw4btDBkEWJrAg.Dvd9LlJ5FYD-wHgzt4nEdv9-1BbovKtrL2HBW0ySH9Mg.PNG.po09back%2F1642261724020.png&type=a340"
        ></ImgBox>
        <ImgBox
          name="living"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDhfNDMg%2FMDAxNjY3ODc2MjU5NDQz.AfRyYWCaSdhzDy10iHkfdXz5Gx-fxOiIROWOwu9GxD0g.7tqaabGHxKz2StDuhiwu_9iULbDIZsuXRHB7TN8VIOcg.JPEG.apple102810%2F5.jpg&type=a340"
          alt="리빙"
          src2="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200318_147%2F1584510601663txDdP_JPEG%2F95_jZHQ76yti8C4WxY76ivMO.jpg&type=a340"
        ></ImgBox>
      </div>
      <hr />
      <div>
        <div className="new-data">
          <h1>REACT 사용</h1>
          <h2>📖오늘 읽을만한 글</h2>
          <Tab />
        </div>
      </div>
    </div>
  );
}

export default App;

//My Context
let React, { StrictMode, useState ,useRef, useEffect, createContext, useContext } = React;
 let { createRoot } = ReactDOM;
 
 const FooterContext = createContext();
 const FooterContextProvider = ({ children }) => {
  const [hstate, setHstate] = useState(true);
  const [mstate, setMstate] = useState(false);
  const [sstate, setSstate] = useState(false);
  const [pstate, setPstate] = useState(false);
  const [focuss,setFocuss] = useState(false);
  const [login, setLogin] = useState(true);
  const [username,setUsername] = useState("User");
  const [ResetEmail, setResetEmail] = useState("");
  const [showChangeInfo,setShowChangeInfo] = useState(false);
  const [messages, setMessages] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [feedbacksCount, setFeedbacksCount] = useState(0);
  const [isLogin, setIslogin] = useState(false);
  const [isAround, setIsaround] = useState(true);
  const All = {
    hstate,
    setHstate,
    mstate,
    setMstate,
    sstate,
    setSstate,
    pstate,
    setPstate,
    focuss,
    setFocuss,
    login,
    setLogin,
    username,
    setUsername,
    isLogin,
    setIslogin,
    isAround,
    setIsaround,
    showChangeInfo,
    setShowChangeInfo,
    messages,
    setMessages,
    fetchedData,
    setFetchedData,
    ResetEmail,
    setResetEmail,
    feedbacksCount,
    setFeedbacksCount
  };

  return (
    <FooterContext.Provider value={All}>
      {children}
    </FooterContext.Provider>
  );
};
 const Top = () =>{
  return(
    <nav>
     <div className="pwg">
      <div className="profile-icon"></div>
      <div className="greet">
       NasfliX
      </div>
     </div>
    </nav>
   );
 }
 
 //Movie Card Layout
 const LayoutMovieCard = () =>{
 
 const {
     setHstate,
     setMstate,
     setSstate,
     setPstate
 } = useContext(FooterContext);
 
  let MoviesCompo = () =>{
     setHstate(false);
     setMstate(true);
     setSstate(false);
     setPstate(false);
 }
     return(
       <>
          <div className="f-layout-cont">
             <div className="f-layout">
              <div className="l-cont">
                <div className="txt">
                 <div className="t1">
                    CineMagic
                    <br />
                     Watch, Enjoy! 
                 </div>
                 <div className="t2">
                  Explore Cinematic Wonders: Handpicked New Releases!
                 </div>
                </div>
                <div className="img">
                 <img 
                 src="https://static.vecteezy.com/system/resources/previews/024/830/900/original/3d-illustration-icon-of-blue-film-and-movie-camera-png.png" 
                 loading="lazy"
                 alt="Illustrateion"/>
                </div>
              </div>
              <div className="btn-cont">
                <button
                onClick={MoviesCompo}
                >Watch Now <i className="fa fa-video-camera"></i> </button>
              </div>
              </div>
           </div>
        </>
     );
 }
 
 //Passed Date
 const TimeAgo = (timepass) =>{
     let date = new Date();
     let passDate = new Date(timepass);
     let AllDate = date - passDate;
     let seconds = Math.floor(AllDate/1000);
     if(seconds>=31536000){
        let years = Math.floor(seconds/31536000);
        return `${years} year${(years===1)?"":"s"} ago`;
     }else if(seconds>=2592000){
         let months = Math.floor(seconds/2592000);
         return `${months} month${(months===1)?"":"s"} ago`;
     }else if(seconds>=86400){
         let days = Math.floor(seconds/86400);
         return `${days} day${(days===1)?"":"s"} ago`;
     }else if(seconds>=3600){
         let hours = Math.floor(seconds/3600);
         return `${hours} hour${(hours===1)?"":"s"} ago`;
     }else if(seconds>=60){
         let minutes = Math.floor(seconds/60);
         return `${minutes} minute${(minutes===1)?"":"s"} ago`;
     }else if(seconds<60){
         let secs = seconds;
         return `just now`;
     }
 }
 
 
 //Movies Data
 const movies = [
  {
    name:"Spider-Man: No Way Home",
    duration:"2h 28m",
    views:"98M views",
    time:TimeAgo("2021-12-17"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3lpk9cAwFxVCTWm1JcQ-_6r0Xyik7Cdhfg&usqp=CAU",
    alt:"Spider-Man: No Way Home",
   watch:"https://youtube.com/embed/JfVOs4VSpmA?si=rLIULx8XGmFN_7OW",
   likes:"122K"
  },
  {
    name:"Avengers: Endgame",
    duration:"3h 1m",
    views:"3B views",
    time:TimeAgo("2019-04-25"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PEwUzkNjHh1b_c6_23wB6UmtNQYLLWtFcA&usqp=CAU",
    alt:"Avengers: Endgame",
    watch:"https://youtube.com/embed/BKviRM0KF2A?si=UAs2rcS_hdZPGArC",
    likes:"222K"
  },
  {
    name:"The Lion King",
    duration:"1h 59m",
    views:"369M views",
    time:TimeAgo("2019-07-19"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRl5Omu1G-i00qiO-GJmkOHwNFLfw6p7ZA&usqp=CAU",
    alt:"The Lion King",
    watch:"https://youtube.com/embed/7TavVZMewpY?feature=shared",
    likes:"272K"
  },
  {
    name:"Black Panther: Wakanda Forever",
    duration:"2h 41m",
    views:"169M views",
    time:TimeAgo("2022-11-11"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVi3qVmrn1mM18VVgDnF_3ONjd9dK9GZ4kgA&usqp=CAU",
    alt:"Black Panther: Wakanda Forever",
    watch:"https://youtube.com/embed/RlOB3UALvrQ?si=YoO5Nml8zOt3StSD",
    likes:"483K"
  },
  {
    name:"Thor: Love and Thunder",
    duration:"1h 59m",
    views:"871M views",
    time:TimeAgo("2022-07-08"), src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOji9eGwnXqmUUPmicwLc-_fXGaAUZwfsXA&usqp=CAU",
    alt:"Thor: Love and Thunder",
    watch:"https://youtube.com/embed/tgB1wUcmbbw?si=uik3d-3gdeoPmcZJ",
    likes:"382K"
  },
  {
    name:"The Conjuring: The Devil Made Me Do It",
    duration:"1h 52m",
    views:"329M views",
    time:TimeAgo("2021-06-04"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybqGWZ6I1NYro2t-t79krhopWS26byweXeA&usqp=CAU",
    alt:"The Conjuring: The Devil Made Me Do It",
    watch:"https://youtube.com/embed/h9Q4zZS2v1k?si=GUlaDmHWzsqMjxVg",
    likes:"342K"
  },
  {
    name:"Jurassic World Dominion",
    duration:"2h 27m",
    views:"762M views",
    time:TimeAgo("2022-06-10"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL0qfZYhXl5CPG7T0CkjTmqYDF8-xixOXeA&usqp=CAU",
    alt:"Jurassic World Dominion",
    watch:"https://youtube.com/embed/fb5ELWi-ekk?si=x1zKidTIDDqGtBh7",
    likes:"394K"
  },
  {
    name:"Sonic the Hedgehog 2",
    duration:"2h 2m",
    views:"369M views",
    time:TimeAgo("2022-04-08"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOE32XTIKq2Tp5GQ2GM3wPP-qE3imXCRXrQ&usqp=CAU",
    alt:"Sonic the Hedgehog 2",
    watch:"https://youtube.com/embed/G5kzUpWAusI?feature=shared",
    likes:"843K"
  },
  {
    name:"Godzilla: King of the Monsters",
    duration:"2h 12m",
    views:"529M views",
    time:TimeAgo("2019-05-31"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjZiHusOCiGcD4nNPJiDDU8wQQlEm2GQqOA&usqp=CAU",
    alt:"Godzilla: King of the Monsters",
    watch:"https://youtube.com/embed/5BxqahE0fu8?si=mCdMeTcKf7aw9ww3",
    likes:"1M"
  },
  {
    name:"The Old Guard",
    duration:"2h 5m",
    views:"1.2B views",
    time:TimeAgo("2020-07-10"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjedaWOZLnD6PDvTN0OT8pKdKlqRsQZFgdA&usqp=CAU",
    alt:"The Old Guard",
    watch:"https://youtube.com/embed/aK-X2d0lJ_s?si=zixKYSmLJprDeW8b",
    likes:"3.5M"
  },
  {
    name:"Bad Boys for Life",
    duration:"2h 4m",
    views:"823M views",
    time:TimeAgo("2020-01-17"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnb04cyL6FWhbz5YRGYXVOcvg93ASZ6t_dg&usqp=CAU",
    alt:"Bad Boys for Life",
    watch:"https://youtube.com/embed/jKCj3XuPG8M?si=Ye8nlauyIimPsBIw",
    likes:"922K"
  },
  {
    name:"Raya and the Last Dragon",
    duration:"1h 47m",
    views:"923M views",
    time:TimeAgo("2021-03-05"),
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcqyx_OHNoLQ5ecBlDyo2gliqqL0h1k2kvQ&usqp=CAU",
    alt:"Raya and the Last Dragon",
    watch:"https://youtube.com/embed/1VIZ89FEjYI?si=2EFmdMGrYC9qHiNB",
    likes:"1.2M"
  },
  
  {
    name: "Star Wars: The Last Jedi",
    duration: "2h 32m",
    views: "2.1B views",
    time: TimeAgo("2017-12-15"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwFL1fMKaMHmjzotXZiGy0hFCEX7wxhJT9w&usqp=CAU",
    alt: "Star Wars: The Last Jedi",
    watch:"https://youtube.com/embed/Q0CbN8sfihY?si=NVUxHM3woLJ6CTq3",
    likes:"19M"
  },
  {
    name: "Thor: Ragnarok",
    duration: "2h 10m",
    views: "1.7B views",
    time: TimeAgo("2017-03-11"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft7WzGmfJ6DXVbplr1xnzX9izPdCGOVoG3Q&usqp=CAU",
    alt: "Thor: Ragnarok",
    watch:"https://youtube.com/embed/ue80QwXMRHg?si=OQgoTIIF7jRIlpz3",
    likes:"11M"
  },
  {
    name: "Beauty and the Beast",
    duration: "2h 10m",
    views: "768M views",
    time: TimeAgo("2017-03-17"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDEOC_UL2QmdO8toMgdkXKnN0YO2QHRABGQ&usqp=CAU",
    alt: "Beauty and the Beast",
    watch:"https://youtube.com/embed/axySrE0Kg6k?si=pnzqeptHrIsa8fbo",
    likes:"732K"
  },
  {
    name: "Mission: Impossible - Fallout",
    duration: "2h 28m",
    views: "4.2B views",
    time: TimeAgo("2018-07-27"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmysn5Vu0oO3x5O6rkvCqtB_uuck7-XasFUQ&usqp=CAU",
    alt: "Mission: Impossible - Fallout",
    watch:"https://youtube.com/embed/wb49-oV0F78?si=3A_X-hCh53OPutGC",
    likes:"8M"
  },
  {
    name: "Titanic",
    duration: "3h 14m",
    views: "6.9B views",
    time: TimeAgo("1997-12-19"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT88dIU28jkPhEFk7C5oR08QzessjFl4PdVw&usqp=CAU",
    alt: "Titanic",
    watch:"https://youtube.com/embed/F2RnxZnubCM?si=7MmDrtyaEJDlQuPy",
    likes:"21M"
  },
  {
    name: "Little Women",
    duration: "2h 15m",
    views: "872M views",
    time: TimeAgo("2019-12-25"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0fC2rayAHZazVVBvc5fj8eXIy_1Tl3wNsw&usqp=CAU",
    alt: "Little Women",
    watch:"https://youtube.com/embed/3cEg2HCl50I?si=f1z4CEi7nBL6UtX3",
    likes:"922K"
  },
  {
    name: "The Hunger Games: Catching Fire",
    duration: "2h 26m",
    views: "8.2B views",
    time: TimeAgo("2013-11-20"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3X8H_5238k48eI6sft-FT1F7G2bOWZWi2w&usqp=CAU",
    alt: "The Hunger Games: Catching Fire",
    watch:"https://youtube.com/embed/EAzGXqJSDJ8?si=2y_Xs5LpomIruBdJ",
    likes:"8M"
  },
  {
    name: "Guardians of the Galaxy",
    duration: "2h 2m",
    views: "1.6B views",
    time: TimeAgo("2014-08-01"),
    src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1C0181ED7342217394E5AC940003A8653E3311B6016194749B29A0FE3F238EB/scale?width=1200&aspectRatio=1.78&format=jpeg",
    alt: "Guardians of the Galaxy",
    watch:"https://youtube.com/embed/u3V5KDHRQvk?si=LZz8Dw08C3fI6tzY",
    likes:"1.03M"
  },
  {
    name: "Jurassic World",
    duration: "2h 4m",
    views: "2.1B views",
    time: TimeAgo("2015-06-12"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8V78hr8u5Z0qsmKtE6JPZ-v7egRCxW-A-Rg&usqp=CAU",
    alt: "Jurassic World",
    watch:"https://youtube.com/embed/FtCslvCjZEY?si=nq3S7usC_lCoUYPc",
    likes:"2.4M"
  },
  {
    name: "The Jungle Book",
    duration: "1h 46m",
    views: "2.5B views",
    time: TimeAgo("2016-04-15"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcgd_5v_WbabvBVX8nS7334QmttdF37mH7w&usqp=CAU",
    alt: "The Jungle Book",
    watch:"https://youtube.com/embed/-8EJ9uhsfQQ?si=CTCQt8HpXsL46AOn",
    likes:"982K"
  },
  {
    name: "Avatar",
    duration: "2h 42m",
    views: "285M views",
    time: TimeAgo("2022-09-25"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQii8JcLJdVUIFPTHVQs3_s1LaklZzy8qiu2A&usqp=CAU",
    alt: "Avatar",
    watch:"https://youtube.com/embed/PLtgIILX7E8?si=eKi54esDANdIc2DA",
    likes:"282K"
  },
  {
    name: "Spider-Man: Across the Spider-Verse",
    duration: "2h 20m",
    views: "488M views",
    time: TimeAgo("2023-06-03"),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNucqbn-JAApdOPshoEZcS6hSEpaojxhGIA&usqp=CAU",
    alt: "Spider-Man: Across the Spider-Verse",
    watch:"https://youtube.com/embed/shW9i6k8cB0?si=NX9v41gwwON5XKO7",
    likes:"298K"
  }
  ];
  
  
  //Movies List Cut to 12 for Tailored
  const Tmovies = movies.slice(0,12);
  
  //Movies Map
  const MoviesList = () =>{
  const {
     hstate,
     setHstate,
     mstate,
     setMstate,
     sstate,
     setSstate,
     pstate,
     setPstate,
     focuss
 } = useContext(FooterContext);
 let MoviesCompo = () =>{
     setHstate(false);
     setMstate(true);
     setSstate(false);
     setPstate(false);
 }
      return(
         <>
          {Tmovies.map((movie,i)=>(
         <li className="list-item" key={i} onClick={MoviesCompo}>
            <div className="m-icon">
             <img src={movie.src} alt={movie.alt} loading="lazy" />
             <i className="fa fa-play"></i>
            </div>
            <div className="m-info">
             <div className="m-name">
                {movie.name}
             </div>
             <div className="m-desc">
              <div className="m-his">
               <i className="fa fa-history"></i> {movie.time}
              </div>
              <div className="m-his">
               <i className="fa fa-eye"></i> {movie.views}
              </div>
              <div className="m-his">
               <i className="fa fa-clock"></i> {movie.duration}
              </div>
             </div>
            </div>
          </li>))}
         </>
      );
  }
 
 //Tailored For you
 const TailoredForYou = () =>{
  return(
   <>
     <div className="tailored-cont">
      <div className="tailored-title">
       Tailored For You:
      </div>
       <div className="tailored-list-cont">
       <ul>
         <MoviesList />
       </ul>
       </div>
     </div>
   </>
  );
 }

    
  //General Footer
 const Footer = () =>{
 const {
     hstate,
     setHstate,
     mstate,
     setMstate,
     sstate,
     setSstate,
     pstate,
     setPstate,
     focuss
 } = useContext(FooterContext);
 
 let HomeCompo = () =>{
     setHstate(true);
     setMstate(false);
     setSstate(false);
     setPstate(false);
 }
 
 let MoviesCompo = () =>{
     setHstate(false);
     setMstate(true);
     setSstate(false);
     setPstate(false);
 }
 
 let SearchCompo = () =>{
     setHstate(false);
     setMstate(false);
     setSstate(true);
     setPstate(false);
 }
 
 let ProfileCompo = () =>{
     setHstate(false);
     setMstate(false);
     setSstate(false);
     setPstate(true);
 }
 const activeh = hstate ? "#1b47c2" : "#000";
 const activem = mstate ? "#1b47c2" : "#000";
 const actives = sstate ? "#1b47c2" : "#000";
 const activep = pstate ? "#1b47c2" : "#000";
 const fcs = focuss ? "none" : "flex";
   return(
    <footer style={{display:fcs}}>
     <div className="icon-cont"
     onClick={HomeCompo} style={{color:activeh}}
     >
       <i className="fa fa-house icon-active"></i>
       <div className="icon-text"
       style={{color:activeh}}
       >Home</div>
     </div>
     <div className="icon-cont"
     onClick={MoviesCompo} style={{color:activem}}
     >
      <i className="fa fa-video"></i>
      <div className="icon-text"
      style={{color:activem}}
      >Movies</div>
     </div>
      <div className="icon-cont"
      onClick={SearchCompo} style={{color:actives}}
      >
       <i className="fa fa-search"></i>
       <div className="icon-text"
       style={{color:actives}}
       >Search</div>
      </div>
      <div className="icon-cont"
      onClick={ProfileCompo} style={{color:activep}}
      >
       <i className="fa fa-user"></i>
       <div className="icon-text"
       style={{color:activep}}
       >Profile</div>
      </div>
    </footer>
     );
   }
   
   
   const Home = () =>{
 const {hstate} = useContext(FooterContext);
 const hideShow = hstate ? "grid" : "none";
     return(
      <>
         <div className="home_cont"
         style={{display:hideShow}}
         >
         <Top />
          <div className="home">
            <LayoutMovieCard />
            <TailoredForYou />
           </div>
          <Footer />
         </div>
      </>
     )
 }
 const Movies = () =>{
 const {mstate,setMstate} = useContext(FooterContext);
 const MoviesPlayCont = useRef(null);
 const hideShow = mstate ? "grid" : "none";
 const MoviesPlay = mstate ? "none" : "block";
 const [videosPlayInfo, setVideosPlayInfo] = useState([]);

let MovieClick = (movie) => {
  setMstate(false);
  MoviesPlayCont.current.style.display = "block";
  setVideosPlayInfo([movie]);
};
 let BackFromMovies = () =>{
     setMstate(true); MoviesPlayCont.current.style.display="none";
 }
     return(
         <>
     <div className="movies-play-cont" ref={MoviesPlayCont}>
  <div className="movies-play-head">
    <i className="fa fa-arrow-left" onClick={BackFromMovies}></i>
  </div>
  {videosPlayInfo.map((movie, i) => (
    <div key={i}>
      <div className="video-play-cont">
     <iframe src={movie.watch} frameBorder="0" id="frame" 
     width="100%"
     height="300px"></iframe>
      </div>
      <div className="video-info-cont">
        <div className="video-name">{movie.name}</div>
        <div className="video-desc">
          <div className="video-views">{movie.views}</div>
          <div className="video-time">{movie.time}</div>
          </div>
          
          <div className="icons-cont">
            <div className="item">
             <i className="fa fa-thumbs-up"></i> <div className="text">Likes</div><div className="caret">|</div><div className="like-count">{movie.likes}</div>
            </div>
            <div className="item">
             <i className="material-symbols-outlined">
share
</i><div className="text">Share</div>
            </div>
            <div className="item">
             <i className="fa fa-scissors">
</i><div className="text">Clip</div>
            </div>
            <div className="item">
            <i className="material-symbols-outlined">
library_add
</i><div className="text">Save</div>
            </div>
            <div className="item">
             <i className="material-symbols-outlined">
subscriptions
</i><div className="text">Subscriptions</div>
            </div>
            <div className="item">
             <i className="material-symbols-outlined">
block
</i><div className="text">Stop ads</div>
            </div>
          </div>
    
      </div>
      <div className="recommended-text">
        Recommended
      </div>
       <div className="recommended-cont">
      {movies.map((mov, i2) => (
     <div key={i2}>
        <img className="recommended-movie" 
        src={mov.src}
        loading="lazy"
         onClick={()=>MovieClick(mov)}/>
      </div>
      ))}
      </div>
    </div>
  ))}
</div>
         <div className="movies_cont"
         style={{display:hideShow}}
         >
             <div className="movies">
              <div className="mov-title">
               <i className="fa fa-layer-group"></i> Latest Movies
              </div>
              <div className="mov-list-cont">
               {movies.map((movie,i)=>(
         <li className="list-item2" key={i} onClick={()=>MovieClick(movie)}>
            <div className="m-icon">
             <img src={movie.src} alt={movie.alt} loading="lazy" />
             <i className="fa fa-play"></i>
            </div>
            <div className="m-info">
             <div className="m-name">
                {movie.name}
             </div>
             <div className="m-desc">
              <div className="m-his">
               <i className="fa fa-eye"></i> {movie.views}
              </div>
              <div className="m-his">
               <i className="fa fa-clock"></i> {movie.duration}
              </div>
             </div>
            </div>
          </li>))}
              </div>
             </div>
             <Footer />
         </div>
         </>
     );
 }
 const Search = () =>{
  const {
     hstate,
     setHstate,
     mstate,
     setMstate,
     sstate,
     setSstate,
     pstate,
     setPstate,
     focuss,
     setFocuss
 } = useContext(FooterContext);
 let MoviesCompo = () =>{
     setHstate(false);
     setMstate(true);
     setSstate(false);
     setPstate(false);
 }
  const [ searchInput,setSearchInput ] = useState('');
  if(!movies){
      return(
          <div>Loading...</div>
      );
  }
  let handleInputChange = (e) =>{
      setSearchInput(e.target.value);
  }
  const filteredMovies = movies.filter((movie)=>
      movie.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  const isSearching = searchInput.trim()!=="";
 const hideShow = sstate ? "grid" : "none";
  let HandleFocus = () =>{
      setFocuss(true);
  }
  let HandleBlur = () =>{
      setFocuss(false);
  }
     return(
       <>
        <div className="search_cont"
        style={{display:hideShow}}
        >
         <div className="search">
          <div className="search-nav">
            <div className="search-box">
             <input
              type="text"
              placeholder="Search..."
              autoCapitalize="off"
              onChange={ handleInputChange }
              onFocus={HandleFocus}
              onBlur={HandleBlur}
              value={ searchInput }
              id="search" />
              <i className="fa fa-search"
              >
              </i>
            </div>
          </div>
          <div className="result-cont">
          {isSearching ? (
              filteredMovies.length === 0 ? (
            <div className="msg_cont">
             <div>No movies found for "{searchInput}"</div>
            </div>
              ) : (
                <ul>
                  {filteredMovies.map((movie, i) => (
                    <li className="list-item3" key={i} onClick={MoviesCompo}>
            <div className="m-icon">
             <img src={movie.src} alt={movie.alt} loading="lazy" />
             <i className="fa fa-play"></i>
            </div>
            <div className="m-info">
             <div className="m-name">
                {movie.name}
             </div>
             <div className="m-desc">
              <div className="m-his">
               <i className="fa fa-history"></i> {movie.time}
              </div>
              <div className="m-his">
               <i className="fa fa-eye"></i> {movie.views}
              </div>
              <div className="m-his">
               <i className="fa fa-clock"></i> {movie.duration}
              </div>
             </div>
            </div>
          </li>
                  ))}
                </ul>
              )
            ) : (
            <div className="msg_cont">
              <div>Enter a search query to find movies.</div>
              </div>
            )}
          </div>
        </div>
         <Footer />
        </div>
       </>
     );
 }
 
 const firebaseConfig = {
      apiKey: "AIzaSyDqrR-zYrBlANZbwATg02w3fsEJk84x0-g",
      authDomain: "nasflix-15f8c.firebaseapp.com",
      databaseURL: "https://nasflix-15f8c-default-rtdb.firebaseio.com",
      projectId: "nasflix-15f8c",
      storageBucket: "nasflix-15f8c.appspot.com",
      messagingSenderId: "662513276162",
      appId: "1:662513276162:web:363f403843c94233c29e1b"
    };
    if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
 const Profile = () =>{
  const {pstate, setFocuss,login,setLogin,username,setUsername,isLogin,setIslogin,isAround,setIsaround,showChangeInfo,setShowChangeInfo,messages,setMessages,setFetchedData,fetchedData,setResetEmail,ResetEmail,setFeedbacksCount,feedbacksCount} = useContext(FooterContext);
 const hideShow = pstate ? "grid" : "none";
 let HandleFocus = () =>{
      setFocuss(true);
  }
  let HandleBlur = () =>{
      setFocuss(false);
  }
  let HandleReg = () =>{
      setLogin(!login);
  }
  const Lshow = login ? "flex" : "none";
  const Rshow = login ? "none" : "flex";
  const Logintext = login ? "Login" : "SignUp";
  const LoginFade = isLogin ? "none" : "flex";
  const GetOutt = isAround ? "block" : "none";
  
 const DetailList = isAround ? "none" : "flex";
  
  const usernameRefL = useRef(null);
  const passwordRefL = useRef(null);
  
// const Lcont = useRef(null);
 // const Rcont = useRef(null);
 // const LogText = useRef(null);
  
  const usernameRefR = useRef(null);
  const emailRefR = useRef(null);
  const passwordRefR = useRef(null);
  const cpasswordRefR = useRef(null);
  
  const userDivR = useRef(null);
  const emailDivR = useRef(null);
  const passDivR = useRef(null);
  const cpassDivR = useRef(null);
  
  const hideshowprofilecont = useRef(null);
  const Pinfoedit = useRef(null);
  const feedbackcontref = useRef(null);
  const feedvalue = useRef(null);
  const loginboxref = useRef(null);
  const forgotboxref = useRef(null);
  
  const bodyref = useRef(null);
  const loaderref = useRef(null);
  
  const userDivL = useRef(null);
  const passDivL = useRef(null);
  const forgotDiv = useRef(null);
  const forgotInp = useRef(null);
  const ficonl = useRef(null);
  
  
  const uiconr = useRef(null);
  const eiconr = useRef(null);
  const piconr = useRef(null); 
  const cpiconr = useRef(null);
  
  const errmsgR = useRef(null);
  const errmsgL = useRef(null);
  const errmsgP = useRef(null);
  const errmsgF = useRef(null);
  
  const uiconl = useRef(null);
  const piconl = useRef(null);
  
  const userL = usernameRefL.current;
  const passL = passwordRefL.current;
  
  const userR = usernameRefR.current;
  const emailR = emailRefR.current;
  const passR = passwordRefR.current;
  const cpassR = cpasswordRefR.current;
  
  const [currentUserUid, setCurrentUserUid] = useState(null);
  
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserUid(user.uid);
        setTimeout(() => {
          setIslogin(true);
          setIsaround(false);
        }, 1000);
      } else {
        setCurrentUserUid(null);
      }
    });
    return () => unsubscribe();
  }, []);
  
let HandleSignup = () =>{
  if(userR.value=="" || userR.value==null){
emailDivR.current.style.border="none";
passDivR.current.style.border="none";
cpassDivR.current.style.border="none";
eiconr.current.style.display="none";
piconr.current.style.display="none";
cpiconr.current.style.display="none"; 
 
        userDivR.current.style.border="2px solid red";
      uiconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Username cannot be empty. Please enter a username";
     userR.focus();
   }else if(userR.value.length<5){
emailDivR.current.style.border="none";
passDivR.current.style.border="none";
cpassDivR.current.style.border="none";
eiconr.current.style.display="none";
piconr.current.style.display="none";
cpiconr.current.style.display="none"; 

       userDivR.current.style.border="2px solid red";
      uiconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Username must be at least 5 characters long";
     userR.focus();
   }else if(emailR.value==""||emailR.value==null){
       userDivR.current.style.border="none";
passDivR.current.style.border="none";
cpassDivR.current.style.border="none";
uiconr.current.style.display="none";
piconr.current.style.display="none";
cpiconr.current.style.display="none"; 

emailDivR.current.style.border="2px solid red";
      eiconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Email cannot be empty. Please enter your email";
     emailR.focus();
   }else if(emailR.value.indexOf("@")<1 || emailR.value.lastIndexOf(".")<emailR.value.indexOf("@")+2 || emailR.value.lastIndexOf(".")+2>=emailR.value.length){
       userDivR.current.style.border="none";
passDivR.current.style.border="none";
cpassDivR.current.style.border="none";
uiconr.current.style.display="none";
piconr.current.style.display="none";
cpiconr.current.style.display="none"; 

emailDivR.current.style.border="2px solid red";
      eiconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Invalid email format. Please enter a valid email address";
     emailR.focus();
   }else if(passR.value==""||passR.value==null){
       userDivR.current.style.border="none";
emailDivR.current.style.border="none";
cpassDivR.current.style.border="none";
uiconr.current.style.display="none";
eiconr.current.style.display="none";
cpiconr.current.style.display="none"; 
     
     passDivR.current.style.border="2px solid red";
      piconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Password cannot be empty. Please enter a password";
     passR.focus();
   }else if(passR.value.length<6){
       userDivR.current.style.border="none";
emailDivR.current.style.border="none";
cpassDivR.current.style.border="none";
uiconr.current.style.display="none";
eiconr.current.style.display="none";
cpiconr.current.style.display="none"; 
     
     passDivR.current.style.border="2px solid red";
      piconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Password must be at least 6 characters long. Please choose a stronger password";
     passR.focus();
   }else if(cpassR.value.length<6){
       userDivR.current.style.border="none";
emailDivR.current.style.border="none";
passDivR.current.style.border="none";
uiconr.current.style.display="none";
eiconr.current.style.display="none";
piconr.current.style.display="none"; 
     
     cpassDivR.current.style.border="2px solid red";
      cpiconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Please confirm your password. The confirmation password cannot be empty";
     cpassR.focus();
   }else if(cpassR.value!==passR.value){
       userDivR.current.style.border="none";
emailDivR.current.style.border="none";
passDivR.current.style.border="none";
uiconr.current.style.display="none";
eiconr.current.style.display="none";
piconr.current.style.display="none";
     
     cpassDivR.current.style.border="2px solid red";
      cpiconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="Passwords do not match. Please make sure the passwords match";
     cpassR.focus();
     }else{
         userDivR.current.style.border="none";
emailDivR.current.style.border="none";
passDivR.current.style.border="none";
cpassDivR.current.style.border="none";
uiconr.current.style.display="none";
eiconr.current.style.display="none";
piconr.current.style.display="none";
cpiconr.current.style.display="none";
     
     let regEmail = emailR.value;
let regPass = passR.value;
let regUsername = userR.value.trim().toLowerCase(); // Get the username from the input field
firebase.auth().createUserWithEmailAndPassword(regEmail, regPass)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // Save user data to the database and update user profile
    let database = firebase.database();
    let usersRef = database.ref('users');
    usersRef.child(user.uid).set({
      email: regEmail,
      username: regUsername, // Save the username to the database
    })
    .then(() => {
      // Update user profile with the provided username
      user.updateProfile({
        displayName: regUsername
      }).then(() => {
        errmsgR.current.firstChild.textContent = "Registration Successful. Please Login";
        errmsgR.current.style.display = "flex";
        errmsgR.current.firstChild.style.background = "yellowgreen";
        setResetEmail(regEmail);
        setUsername(regUsername); // Set the username in the state for later use
        userR.value = "";
        emailR.value = "";
        passR.value = "";
        cpassR.value = "";
        userL.value = "";
        passL.value = "";
        const Logintext = "";
        setTimeout(() => {
          setLogin(!login);
          setIslogin(true);
          setIsaround(false);
        }, 1000);
      }).catch((error) => {
        // Handle profile update error
      });
    })
    .catch((error) => {
      // Handle database error
    });
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    // Handle registration error
    // ...
    if(errorCode === "auth/email-already-in-use"){
        userDivR.current.style.border="none";
passDivR.current.style.border="none";
cpassDivR.current.style.border="none";
uiconr.current.style.display="none";
piconr.current.style.display="none";
cpiconr.current.style.display="none"; 

emailDivR.current.style.border="2px solid red";
      eiconr.current.style.display="block";
     errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     ="This email address is already registered. Please choose another email address or try logging in if you already have an account";
     emailR.focus();
    }else{
        errmsgR.current.style.display="flex";
     errmsgR.current.firstChild.textContent
     =error.message;
    }
  });
     
     }
 }
 
 let HandleLogin = () =>{
     if(userL.value=="" || userL.value==null){
        
passDivL.current.style.border="none"; 
piconl.current.style.display="none";

        userDivL.current.style.border="2px solid red";
      uiconl.current.style.display="block";
     errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     ="Email cannot be empty. Please enter your email";
     userL.focus();
     }else if(passL.value==""||passL.value==null){
         userDivL.current.style.border="none"; 
uiconl.current.style.display="none";

        passDivL.current.style.border="2px solid red";
      piconl.current.style.display="block";
     errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     ="Password cannot be empty. Please enter your password to log in";
     passL.focus();
     }else{
       userDivL.current.style.border="none"; 
uiconl.current.style.display="none";
passDivL.current.style.border="none"; 
piconl.current.style.display="none";
        
        firebase.auth().signInWithEmailAndPassword(userL.value, passL.value)
  .then((userCredential) => {
    // Signed in
    setResetEmail(userL.value);
    var user = userCredential.user;

    // Retrieve the username from the database based on user's email
    let database = firebase.database();
    let usersRef = database.ref('users');
    usersRef.orderByChild('email').equalTo(user.email).once('value', (snapshot) => {
      if (snapshot.exists()) {
        let userData = snapshot.val();
        let userId = Object.keys(userData)[0];
        setUsername(userData[userId].username); // Set the retrieved username to state
      }
    });

    errmsgL.current.style.display = "flex";
    errmsgL.current.firstChild.style.background = "yellowgreen";
    errmsgL.current.firstChild.textContent = "Login Successful!";
    const Logintext = "";
    userR.value = "";
    emailR.value = "";
    passR.value = "";
    cpassR.value = "";
    userL.value = "";
    passL.value = "";
  })
  .catch((error) => {
    let errorCode = error.code;
  if(errorCode === "auth/internal-error"){
        passDivL.current.style.border="none"; 
piconl.current.style.display="none";

        passDivL.current.style.border="2px solid red";
      piconl.current.style.display="block";
     errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     ="Incorrect username or password. Please check your credentials and try again";
     passL.focus();
    }else if(errorCode === "auth/invalid-email"){
        passDivL.current.style.border="none"; 
piconl.current.style.display="none";

        userDivL.current.style.border="2px solid red";
      uiconl.current.style.display="block";
     errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     ="Invalid email address. Please enter a valid email";
     userL.focus();
    }else if(errorCode === "auth/wrong-password"){
        userDivL.current.style.border="none"; 
uiconl.current.style.display="none";

        passDivL.current.style.border="2px solid red";
      piconl.current.style.display="block";
     errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     ="Invalid password. Please enter a valid password with at least 6 characters";
     passL.focus();
    }else if(errorCode === "auth/too-many-requests"){
        passDivL.current.style.border="none"; 
piconl.current.style.display="none";
passDivL.current.style.border="none"; 
piconl.current.style.display="none";

     errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     ="Too many incorrect password attempts. Please try again later or reset your password";
     userL.focus();
    }else if(errorCode === "auth/user-disabled"){
        passDivL.current.style.border="none"; 
piconl.current.style.display="none";

        userDivL.current.style.border="2px solid red";
      uiconl.current.style.display="block";
     errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     ="Account disabled. Please contact support for assistance";
     userL.focus();
    }else{
        errmsgL.current.style.display="flex";
     errmsgL.current.firstChild.textContent
     =error.message;
    }
  });
     }
 }
  let HandleLogout = () =>{
      firebase.auth().signOut();
      setIslogin(false);
      setIsaround(true);
      errmsgL.current.style.display="flex";
      errmsgL.current.firstChild.style.background="red";
     errmsgL.current.firstChild.textContent
     ="Logged Out!";
  }
  
  let HandleChangeP = (e) =>{
      setUsername(e.target.value);
  }
const feedbacksRef = firebase.database().ref('SoloFeedBacks');

const HandleSaveP = async () => {
  // Get the new username and current user details, trim and convert to lowercase
  const newUsername = username.trim().toLowerCase();
  const currentUser = firebase.auth().currentUser;
  // Check if there's a logged-in user
  if (!currentUser) {
    return;
  }

  const currentUserUid = currentUser.uid;
  const usersRef = firebase.database().ref('users');
  const feedbacksRef = firebase.database().ref('SoloFeedBacks');
  // Display error if username is empty or less than 5 characters
  if (newUsername === '') {
    errmsgP.current.style.display = 'flex';
    errmsgP.current.firstChild.style.background = 'red';
    errmsgP.current.firstChild.textContent = 'Username must not be empty';
    return;
  } else if (newUsername.length < 5) {
    errmsgP.current.style.display = 'flex';
    errmsgP.current.firstChild.style.background = 'red';
    errmsgP.current.firstChild.textContent = 'Username must be 5 characters long';
    return;
  }
  try {
    // Check if the new username exists in users (case-insensitive)
    const usersSnapshot = await usersRef.orderByChild('username').equalTo(newUsername).once('value');
    let usernameExists = false;
    // Check if the new username exists in users
    if (usersSnapshot.exists()) {
      Object.keys(usersSnapshot.val()).forEach((uid) => {
        if (uid !== currentUserUid) {
          usernameExists = true;
        }
      });
    }
    // Display appropriate error messages based on username existence
    if (usernameExists) {
      errmsgP.current.style.display = 'flex';
      errmsgP.current.firstChild.style.background = 'red';
      errmsgP.current.firstChild.textContent = 'Username already exists';
    } else {
      // Update username in users
      await usersRef.child(currentUserUid).update({ username: newUsername });
      // Update username in messages
      await updateMessagesUsername(currentUserUid, newUsername);
      // Display success message
      errmsgP.current.style.display = 'flex';
      errmsgP.current.firstChild.style.background = 'yellowgreen';
      errmsgP.current.firstChild.textContent = 'Changes saved successfully!';
      // Hide profile container after 500 milliseconds
      setTimeout(() => {
        hideshowprofilecont.current.style.display = 'flex';
        setShowChangeInfo(false);
      }, 500);
    }
  } catch (error) {
    console.error('Error updating username: ', error);
  }
};

const updateMessagesUsername = async (userId, newUsername) => {
  try {
    const messagesSnapshot = await feedbacksRef.orderByChild('user_id').equalTo(userId).once('value');
    
    if (messagesSnapshot.exists()) {
      const updates = {};
      messagesSnapshot.forEach((messageSnapshot) => {
        const messageId = messageSnapshot.key;
        updates[messageId + '/user'] = newUsername;
      });
      await feedbacksRef.update(updates);
    }
  } catch (error) {
    console.error('Error updating messages username: ', error);
  }
};


  let HandleResetPass = () =>{
      let auth = firebase.auth(); auth.sendPasswordResetEmail(ResetEmail).then(function() {
    // Email sent.
    errmsgP.current.style.display="flex";
errmsgP.current.firstChild.style.background="yellowgreen";
errmsgP.current.firstChild.textContent
     ="Reset password link sent! 📧 Check your email inbox";
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;

    if(errorCode === "auth/invalid-email"){
        errmsgP.current.style.display="flex";
errmsgP.current.firstChild.style.background="red";         errmsgP.current.firstChild.textContent
     ="Invalid Email";
    }else if(errorCode === undefined){
        errmsgP.current.style.display="flex";
errmsgP.current.firstChild.style.background="yellowgreen";     errmsgP.current.firstChild.textContent
     ="Reset password link sent! 📧 Check your email inbox";
    }else{
        errmsgP.current.style.display="flex";
errmsgP.current.firstChild.style.background="red";     errmsgP.current.firstChild.textContent
     =errorMessage;
    }
  });
  }
  const PInfo = showChangeInfo ? "flex" : "none";
  let ShowPernalInfo = () =>{
      setShowChangeInfo(true); hideshowprofilecont.current.style.display="none";
  }
  let SendFeedBack = () =>{
   Pinfoedit.current.style.display="none"; hideshowprofilecont.current.style.display="none";
     feedbackcontref.current.style.display="block";
     bodyref.current.scrollTop = bodyref.current.scrollHeight;
  }
  
  let CloseFeedBack = () =>{ feedbackcontref.current.style.display="none"; hideshowprofilecont.current.style.display="flex";
     feedvalue.current.value="";
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json");
        const data = await response.json();
        setFetchedData([data]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  
  
  let HandleSendFeedBack = () => {
  if (feedvalue.current.value.trim() !== "") {
    let database = firebase.database();
    let messageRef = database.ref("SoloFeedBacks");
    let feedinputvalue = feedvalue.current.value;
    
    fetchedData.forEach((item) => {
      messageRef.push({
        user_id: firebase.auth().currentUser.uid, // Save the user's ID with the message
        user: username,
        feedback: feedinputvalue,
        country: item.country_name,
        c_code: item.country_code,
        ip_address: item.ip,
        city: item.city,
        location: item.latitude + "," + item.longitude,
        Network: item.org,
        languages: item.languages,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
    });

    feedvalue.current.value = "";
    feedvalue.current.focus();
    setFocuss(true);
    setTimeout(() => {
      bodyref.current.scrollTop = bodyref.current.scrollHeight;
    }, 10);
  }
};


useEffect(() => {
  let database = firebase.database();
  let messageRef = database.ref("SoloFeedBacks");
  let usersRef = database.ref("users");

  const handleChildAdded = (snapshot) => {
    const newMessage = {
      id: snapshot.key,
      user_id: snapshot.val().user_id, // Retrieve the user ID from the database
      user: snapshot.val().user,
      feedback: snapshot.val().feedback,
      time: TimeAgo(snapshot.val().timestamp),
      flag: "fi fi-" + snapshot.val().c_code.toLowerCase(),
      country: snapshot.val().country,
      isverified: false, // Default value, will be updated based on user data
    };

    if (newMessage.isverified) {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } else {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }

    bodyref.current.style.display = "block";
    loaderref.current.style.display = "none";
    setTimeout(() => {
      bodyref.current.scrollTop = bodyref.current.scrollHeight;
    }, 10);
  };

  const handleUserVerification = (snapshot) => {
    if (snapshot.exists()) {
      const usersData = snapshot.val();

      // Update isverified for each message based on user verification status
      setMessages((prevMessages) => {
        return prevMessages.map((message) => {
          const userId = message.user_id;
          const user = usersData[userId];
          const isVerified = user && user.isverified;

          return {
            ...message,
            isverified: isVerified || false, // Set isverified based on user verification status
          };
        });
      });

      // Set username and email states for the authenticated user
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        const authenticatedUser = usersData[userId];
       setResetEmail(authenticatedUser.email || '');
        if (authenticatedUser) {
          setUsername(authenticatedUser.username || ''); // Set username state
          setEmail(authenticatedUser.email || ''); // Set email state
         setResetEmail(authenticatedUser.email || '');
        }
      }
    }
  };

  messageRef.on("child_added", handleChildAdded);
  usersRef.on("value", handleUserVerification);

  messageRef.on("value", (snapshot) => {
    if (snapshot.exists()) {
      const count = Object.keys(snapshot.val()).length;
      setFeedbacksCount(count);
    } else {
      setFeedbacksCount(0);
    }
  });

  return () => {
    messageRef.off("child_added", handleChildAdded);
    usersRef.off("value", handleUserVerification);
    messageRef.off();
  };
}, []);

    let Showforgot = () =>{
        loginboxref.current.style.display="none";
        forgotboxref.current.style.display="flex";
    }
    
    let BackFromForgot = () =>{
        loginboxref.current.style.display="flex";
        forgotboxref.current.style.display="none";
    }
    
    let HandleForgotSend = () =>{
        if(forgotInp.current.value=="" || forgotInp.current.value==null){

        forgotDiv.current.style.border="2px solid red";
      ficonl.current.style.display="block";
     errmsgF.current.style.display="flex";
     errmsgF.current.firstChild.textContent
     ="Email cannot be empty. Please enter your email";
     forgotInp.current.focus();
     }else{
         let auth = firebase.auth(); auth.sendPasswordResetEmail(forgotInp.current.value).then(function() {
    // Email sent.
forgotDiv.current.style.border="none";
ficonl.current.style.display="none";

    errmsgF.current.style.display="flex";
errmsgF.current.firstChild.style.background="yellowgreen";
errmsgF.current.firstChild.textContent
     ="Reset password link sent! 📧 Check your email inbox";
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;

    if(errorCode === "auth/invalid-email"){
        errmsgF.current.style.display="flex";
errmsgF.current.firstChild.style.background="red";         errmsgF.current.firstChild.textContent
     ="Invalid Email";
    }else if(errorCode === undefined){
        errmsgP.current.style.display="flex";
errmsgP.current.firstChild.style.background="yellowgreen";     errmsgP.current.firstChild.textContent
     =errorMessage;
     }else{
         errmsgP.current.style.display="flex";
errmsgP.current.firstChild.style.background="yellowgreen";     errmsgP.current.firstChild.textContent
     =errorMessage;
     }
    });
    }
    }
      
      const handleDeleteMessage = (id) => {
    let database = firebase.database();
    let messageRef = database.ref("SoloFeedBacks").child(id);
    messageRef.remove()
        .then(() => {
            //console.log("Message deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting message: ", error);
        });
        setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
      feedvalue.current.focus();
      setFocuss(true);
};
     return(
         <>
          <div className="profile-cont"
          style={{display:hideShow}}
          >
           <div className="profile">
             <div className="profile-ball">
              <div className="welcome-cont">
               <div className="icon"></div>
                <div className="welcome">
                 Welcome {username}
                </div>
                <div className="login-signup">
               <span style={{display:GetOutt}}> {Logintext} </span>
                </div>
              </div>
             </div>
             
             <div className="AllForms" style={{display:LoginFade}}>
             <div className="login-box-cont" style={{display:Lshow}} ref={loginboxref}>
              <div className="login-box">
                <div className="user-box" ref={userDivL}>
                <i className="fa fa-envelope">
                 </i>
                 <input type="email"
                 placeholder="Email"
                 autoCapitalize="off"
                 onFocus={HandleFocus}
                 onBlur={HandleBlur}
                 ref={usernameRefL}
                 />
                 <i className="fa fa-info-circle ul" ref={uiconl}></i>
                </div>
                <div className="user-box" ref={passDivL}>
                 <i className="fa fa-lock">
                 </i>
                 <input type="password"
                 placeholder="Password"
                 onFocus={HandleFocus}
                 onBlur={HandleBlur}
                 ref={passwordRefL}
                 />
                 <i className="fa fa-info-circle pl" ref={piconl}></i>
                </div>
                <div className="error-cont" ref={errmsgL}>
     <div className="error-msg"></div>
    </div>
                <div className="btn-box">
                 <button
                 onClick={HandleLogin}
                 >
                  Login
                 </button>
                </div>
                <div className="info-box">
                 <p className ="newb" >New User?</p>
                 <p
                className="nreg"
                onClick={HandleReg}
                 >
                 Register</p>
                </div>
                 <p className="forgotp"  onClick={Showforgot}>forgot password?</p>
              </div>
             </div>
             
             <div className="forgot-box-cont" ref={forgotboxref}>
             <div className="forgot-box">
                <div className="user-box" ref={forgotDiv}>
                <i className="fa fa-envelope">
                 </i>
                 <input type="email"
                 placeholder="Email"
                 autoCapitalize="off"
                 onFocus={HandleFocus}
                 onBlur={HandleBlur}
                 ref={forgotInp}
                 />
                 <i className="fa fa-info-circle ul" ref={ficonl}></i>
                </div>
                <div className="error-cont" ref={errmsgF}>
     <div className="error-msg"></div>
    </div>
                <div className="btn-box">
                 <button
                 onClick={HandleForgotSend}
                 >
                  Send Link
                 </button>
                </div>
                <div className="info-box">
                 <p
                className="nreg"
                onClick={BackFromForgot}
                 >Login</p>
                </div>
                </div>
                </div>
             
             <div className="signup-box-cont" style={{display:Rshow}}>
         
  <div className="signup-box">
    <div className="user-box" ref={userDivR}>
      <i className="fa fa-user"></i>
      <input
        type="text"
        placeholder="Username"
        autoCapitalize="off"
        onFocus={HandleFocus}
        onBlur={HandleBlur}
        ref={usernameRefR}
      />
      <i className="fa fa-info-circle ur" ref={uiconr}></i>
    </div>
    <div className="user-box" ref={emailDivR}>
      <i className="fa fa-envelope"></i>
      <input
        type="email"
        placeholder="Email"
        onFocus={HandleFocus}
        onBlur={HandleBlur}
        ref={emailRefR}
      />
      <i className="fa fa-info-circle er" ref={eiconr}></i>
    </div>
    <div className="user-box" ref={passDivR}>
      <i className="fa fa-lock"></i>
      <input
        type="password"
        placeholder="Password"
        onFocus={HandleFocus}
        onBlur={HandleBlur}
        ref={passwordRefR}
      />
      <i className="fa fa-info-circle pr" ref={piconr}></i>
    </div>
    <div className="user-box" ref={cpassDivR}>
      <i className="fa fa-lock"></i>
      <input
        type="password"
        placeholder="Confirm password"
        onFocus={HandleFocus}
        onBlur={HandleBlur}
        ref={cpasswordRefR}
      />
      <i className="fa fa-info-circle cpr" ref={cpiconr}></i>
    </div>
    <div className="error-cont" ref={errmsgR}>
     <div className="error-msg"></div>
    </div>
    <div className="btn-box">
      <button onClick={HandleSignup}>Signup</button>
    </div>
    <div className="info-box">
      <p className="newb">Already have an account?</p>
      <p className="nreg" onClick={HandleReg}>
        Login
      </p>
    </div>
    </div>
</div>
</div>  

        <div className="profile-details-cont" style={{display:DetailList}}>
         <div className="profile-details" ref={hideshowprofilecont}>
          <li className="detail" onClick={ShowPernalInfo}>
            <div className="icon">
             <i className="fa fa-user"></i>
            </div>
            <div className="name-cont">
              <div className="name">
                Personal Info
              </div>
              <div className="desc">
                Manage your profile details
              </div>
            </div>
            <div className="angle-cont">
             <i className="fa fa-angle-right"></i>
            </div>
          </li>
          <li className="detail" onClick={SendFeedBack}>
            <div className="icon">
             <i className="fa fa-comments"></i>
            </div>
            <div className="name-cont">
              <div className="name">
                Send Feedback
              </div>
              <div className="desc">
                Share your thoughts with us
              </div>
            </div>
            <div className="angle-cont">
             <i className="fa fa-angle-right"></i>
            </div>
          </li>
          <li className="detail signout" onClick={HandleLogout}>
            <div className="icon sign-out">
             <i className="fa fa-sign-out"></i>
            </div>
            <div className="name-cont">
              <div className="name sign-out">
                Log Out
              </div>
              <div className="desc">
                Sign off and take a break
              </div>
            </div>
            <div className="angle-cont">
             <i className="fa fa-angle-right sign-out"></i>
            </div>
          </li>
         </div>
         
          <div className="personal-details-cont" style={{display:PInfo}} ref={Pinfoedit}>
            <div className="personal-details">
                <li className="p-info">
                <div className="showchange">
                Change Username
                </div>
                <div className="p-info-in">
                <div className="icon">
             <i className="fa fa-user"></i>
            </div>
                <input type="text" 
                placeholder="Username"
                onChange={HandleChangeP}
                onFocus={HandleFocus}
                onBlur={HandleBlur}
                value={username}
                 />
            <div className="angle-cont">
             <i className="fa fa-pen"></i>
            </div>
            </div>
                </li>
                
                <li className="p-info">
                <div className="showchange">
                Your Email Address
                </div>
                <div className="p-info-in">
                <div className="icon">
             <i className="fa fa-envelope"></i>
            </div>
                <input type="email" 
                className="fademail"
                placeholder="Email"
                onChange={HandleChangeP}
                onFocus={HandleFocus}
                onBlur={HandleBlur}
                value={ResetEmail}
                disabled
                 />
            <div className="angle-cont">
             <i className="fa fa-lock"></i>
            </div>
            </div>
                </li>
                
                <li className="p-info">
                <div className="showchange">
                Reset Password
                </div>
                <div className="p-info-in">
                <div className="icon">
             <i className="fa fa-key"></i>
            </div>
                <button onClick={HandleResetPass}>Reset Password</button>
            <div className="angle-cont">
             <i className="fa fa-reset"></i>
            </div>
            </div>
                </li>
                
                <div className="error-cont" ref={errmsgP}>
     <div className="error-msg"></div>
    </div>
                
                <li className="p-info save">
                 <button onClick={HandleSaveP}>Save</button>
                </li>
                
            </div>
        </div>
         
         <div className="feedback-cont" ref={feedbackcontref}>
          <div className="feedback-head">
             <i className="fa fa-comments-o"></i> <div className="name">Feedbacks</div>
             <div className="feed-count">
              {feedbacksCount}
             </div>
             <div className="close"
             onClick={CloseFeedBack}
             >
                <i className="fa fa-backspace"></i> close
             </div>
          </div>
          
          <div className="load_cont" ref={loaderref}>
        <div className="loader"></div>
        <p>Loading data...</p>
        </div>
          
          <div className="feedback-body" ref={bodyref}>
      {messages.map((db_data, i) => (
        <div className={`msg-box ${db_data.user_id === currentUserUid ? 'schat' : ''}`} key={i}>
          <div className="user-info">
            <div className="user-name">{db_data.user} {db_data.isverified && (
              <i className="material-symbols-outlined">verified</i>
            )}:</div>
            <div className="user-from">
              {db_data.country} <i className={db_data.flag}></i>
            </div>
            {db_data.user_id === currentUserUid && (
              <i onClick={() => handleDeleteMessage(db_data.id)} className="fa fa-trash-o"></i>
            )}
          </div>
          <div className="msg">{db_data.feedback}</div>
          <div className="time">{db_data.time}</div>
        </div>
      ))}
    </div>
          
          <div className="feedback-foot">
            <input 
            type="text"
            placeholder="Send feedback..."
            onClick={HandleFocus}
            onBlur={HandleBlur}
            ref={feedvalue}
            />
            <div className="uil uil-message" onClick={HandleSendFeedBack}>
            </div>
          </div>
         </div>
        </div>
           </div>
            <Footer />
          </div>
         </>
     );
 }
   
    
    //App
   const App = () =>{
     return(
      <>
      <FooterContextProvider>
        <Home />
        <Movies />
        <Search />
        <Profile />
      </FooterContextProvider>
      </>
      );
    }
      
      //Render
      const destination = document.querySelector("#app");
      const root = createRoot(destination);
      root.render(
       <StrictMode>
          <App />
       </StrictMode>
      );

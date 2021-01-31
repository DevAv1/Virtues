import React, { useEffect, useState } from 'react'
import '../styles/posts.css'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../store/actions/posts.actions';
import { getPostsSelector } from '../store/selectors';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LatestPosts } from '../components/LatestPosts'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Pagination } from '../components/Pagination';

export const Posts = () => {
  const dispatch = useDispatch(); 
  const posts = useSelector(getPostsSelector)

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(7);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [])


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles();

  return (
    <div className="posts">
      <h3 id="sub-text">כל הטרנדים בעולם הוולנס,
        מחשבות, המלצות...<br></br>
        וגם- צעדים פשוטים ומעשיים שיהפכו את מירוץ החיים למסע מהנה ונעים יותר</h3>
      <hr style={{width:"80%", margin: "30px auto"}}/>
      {currentPosts.length > 0 ?
        <div className="band">
         { currentPosts.map((item, index) => {
            return (
              <div className={`${!index && "item-1" }`} key={item.uid} data-aos="fade-right">
                <Link to={`/post/${item.id}`} params={item} className="card">
                  <div className="thumb" style={{backgroundImage: `url(${item.image})`}}></div>
                  <article>
                    <h1>{item.title}</h1>
                    <h5>{item.catagory}</h5>
                    <p>{truncate(item?.description, 150)}</p>
                    <div className="readmore">
                      <ArrowBackIosIcon id="card_arrow"/><label>קראי עוד</label> 
                    </div>
                    {/* <span>{item.timestamp.toDate().toString()}</span> */}
                  </article>
                </Link>
              </div>
            )
           
          })
          }
          </div>
          :
          <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
          </Backdrop>
      }
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>

      <div className="parallax_two">
        <div className="wrapper">
          <h1>Virtues</h1>
        </div>
      </div>  
     
      <LatestPosts posts={posts}/>

      <div className="virtues-siders-wrapper">
        <div className="virtues-siders">
          <h1>Happier, Healthier</h1>
        </div>
      </div>

      {/* <div className="parallax_one"></div>   */}
  </div>
  )
}
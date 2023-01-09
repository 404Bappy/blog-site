import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './../../App';


export default function Home() {

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const [data, setData] = useState([])
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    fetch('/allpost', {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result.posts)
      })


  }, [])
  console.log("state======", state)
  const likePost = (id) => {
    fetch('/like', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then(result => {
        //   console.log(result)
        const newData = data.map(item => {
          if (item._id === result._id) {
            return result
          } else {
            return item
          }
        })
        setData(newData)
      }).catch(err => {
        console.log(err)
      })
  }
  const unlikePost = (id) => {
    fetch('/unlike', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then(result => {
        //   console.log(result)
        const newData = data.map(item => {
          if (item._id === result._id) {
            return result
          } else {
            return item
          }
        })
        setData(newData)
      }).catch(err => {
        console.log(err)
      })
  }

  const makeComment = (text, postId) => {
    fetch('/comment', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId,
        text
      })
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        const newData = data.map(item => {
          if (item._id === result._id) {
            return result
          } else {
            return item
          }
        })
        setData(newData)
      }).catch(err => {
        console.log(err)
      })
  }


  const deletePost = (postid) => {
    fetch(`/deletepost/${postid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        const newData = data.filter(item => {
          return item._id !== result._id
        })
        setData(newData)
      })
  }




  // console.log("data======",data)

  return (

    <div style={{ display: 'flex' }}>


      <div style={{ display: "flex", marginLeft: "100px", marginTop: "28px" }}>
        <ul class="list-group" style={{ width: "300px", textAlign: "center" }}>
          <li class="list-group-item" style={{ textAlign: "center", fontWeight: "bold" }} >Blogger Buzz</li>
          <li class="list-group-item list-group-item-primary"> <a href="./play" >Game</a></li>
          <li class="list-group-item list-group-item-secondary"><a href="./country" >Country</a></li>
          <li class="list-group-item list-group-item-success"><a href="./animal" >Animal</a></li>
          <li class="list-group-item list-group-item-danger"><a href="./programing" >Programing</a></li>
          <li class="list-group-item list-group-item-warning"><a href="./design" >Design</a></li>
          <li class="list-group-item list-group-item-info"><a href="./study" >Study</a></li>
        </ul>



      </div>



      <div className='home' style={{ marginLeft: '80px' }}>

        {
          data.map(item => {
            return (
              <div className='card home-card' key={item._id}>
                <h5 style={{ padding: "8px", fontWeight: "bold", textAlign: "center", background: "LightGray" }}><Link to={item?.postedBy?._id !== state._id ? "/profile/" + item?.postedBy?._id : "/profile"}>{item?.postedBy?.name}</Link>
                  {item?.postedBy?._id === state._id
                    && <i className="material-icons" style={{ float: "right", color: "red" }}
                      onClick={() => deletePost(item._id)}
                    >delete</i>
                  } </h5>
                <div className='card-image'>
                  <img src={item.photo} alt="" />

                </div>
                <div className='card-content'>
                  <i className="material-icons" style={{ color: "red", paddingRight: "10px" }}><a href="https://www.facebook.com/" > share</a></i>
                  {item.likes.includes(state._id)
                    ?
                    <i className="material-icons" style={{ color: "red" }}
                      onClick={() => { unlikePost(item._id) }}
                    >thumb_down</i>
                    :
                    <i className="material-icons" style={{ color: "green" }}
                      onClick={() => { likePost(item._id) }}
                    >thumb_up</i>
                  }


                  <h6>{item.likes.length} likes</h6>
                  <h6 style={{ fontWeight: "bold", background: "DodgerBlue", color: "white", padding: "10px" }}>{item.title}</h6>
                  <p style={{ background: "LightGray", padding: "10px" }}>{item.body} </p>




                  {
                    item.comments.map(record => {
                      return (
                        <h6 key={record._id} style={{ background: "LightGray", marginTop: "10px", padding: "10px", borderRadis: "5px" }}><span style={{ fontWeight: "500", color: "DodgerBlue", padding: "10px", borderRadius: "5px" }}>{record?.postedBy?.name}</span> {record?.text}

                        </h6>
                      )
                    })
                  }

                  <form onSubmit={(e) => {
                    e.preventDefault()
                    makeComment(e.target[0].value, item._id)
                  }}>
                    <input type="text" placeholder="add a comment" style={{ color: "blue" }} />
                  </form>
                </div>
              </div>
            )
          })
        }
      </div>


      <div class="card" style={{ width: '25rem', padding: "10px", height: "1150px", marginLeft: '80px', marginTop: "32px" }}>
        <div>
          <h5 style={{ fontWeight: "bold", background: "DodgerBlue", color: "white", padding: "5px" }}>Suggest</h5>
          <img style={{ height: "175px" }} class="card-img-top" src="http://res.cloudinary.com/dluu1xcoo/image/upload/v1671790430/vew0trum3z7teptbeclt.jpg" alt="" />
          <div class="card-body">
            <h5 class="card-title" style={{ fontWeight: "bold" }}>Top 10 Algorithms and Data Structures that Competitive Programmers Should Ace</h5>
            <p class="card-text">Here are the Top 10 Algorithms and Data Structures that Competitive Programmers Should Ace Competitive programming, is the sport of coding, as we all know...</p>
            <a href="./country" class="btn btn-success" s>Go somewhere</a>

          </div>

          <div style={{ paddingTop: "15px" }}>
            <img style={{ height: "175px" }} class="card-img-top" src="http://res.cloudinary.com/dluu1xcoo/image/upload/v1671703381/zjtjncybrmqh1fm6nhuo.webp" alt="" />
            <div class="card-body">
              <h5 class="card-title" style={{ fontWeight: "bold" }}>Top 10 Algorithms and Data Structures that Competitive Programmers Should Ace</h5>
              <p class="card-text">Computer programs make computers work Computer programs (or software) are what makes computers work. Without software,...</p>
              <a href="./programing" class="btn btn-primary" >Go somewhere</a>
            </div>
          </div>
        </div>

      </div>


    </div>



  )
}

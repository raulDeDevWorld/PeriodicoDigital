import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import PostOne from '../components/PostOne'
import PostTwo from '../components/PostTwo'
import PostThree from '../components/PostThree'
import { useUser } from '../context/Context.js'
import { WithAuth } from '../HOCs/WithAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import styles from '../styles/Home.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function Admin() {
  const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()

  console.log(userDB)

  function handlerUploadFile(e, fileName) {
    const file = e.target.files[0]
    uploadIMG(file, fileName, setUserSuccess, postsIMG, setUserPostsIMG)
  }
  function handlerLogout(e) {
    handleSignOut()
    router.push("/Login")

  }


  useEffect(() => {
 
    if (!user) router.replace('/Login')
}, [user]);


  return (
    <div className={styles.container}>
      {success == "Cargando" && <Success>Cargando...</Success>}
      <main className={styles.main}>
        <div className={styles.containerLogout}>
          <span>Bienvenido Admin</span>
          <Button style="buttonPrimary" click={handlerLogout}>Logout</Button>
        </div>


        <div className={styles.header}>
          <label for="bannerIntro" className={styles.label} >Seleccionar Baner de Intro</label>
          <input type="file" id="bannerIntro" className={styles.inputFile} onChange={(e) => handlerUploadFile(e, `BannerIntro`)} accept="images" />
          <div className={styles.bannerIntroContainer}>
            {postsIMG.BannerIntro && <img className={styles.bannerIntroIMG} src={postsIMG.BannerIntro && postsIMG.BannerIntro} alt="Vercel Logo" />}
          </div>
          <div className={styles.portada}>
            <div className={styles.socialMedia}>
              <span>Siguenos en:</span>
              <div className={styles.socialMediaIcons}>
                <img src="/SocialMedia/internet.png" alt="SocialMedia" />
                <img src="/SocialMedia/facebook.png" alt="SocialMedia" />
                <img src="/SocialMedia/instagram.png" alt="SocialMedia" />
                <img src="/SocialMedia/twiter.png" alt="SocialMedia" />
                <img src="/SocialMedia/youtube.png" alt="SocialMedia" />
                <img src="/SocialMedia/instagram.png" alt="SocialMedia" />
              </div>
            </div>
            <video
              muted
              autoPlay={"autoplay"}
              preload="auto"
              loop
              className={styles.video}>
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div></div>
          </div>
        </div>
        <Navbar navbar={userDB.navbar} />

        <div>
        {userDB.inicio !== null && <Form topic="inicio" value={userDB.inicio}></Form>}
          {userDB.inicio == "PostOne" &&  
            <PostOne topic="inicio" post1={`${postsIMG["inicio-Post1"] && postsIMG["inicio-Post1"]}`}
              post2={`${postsIMG["inicio-Post2"] && postsIMG["inicio-Post2"]}`}
              post3={`${postsIMG["inicio-Post3"] && postsIMG["inicio-Post3"]}`}
              post4={`${postsIMG["inicio-Post4"] && postsIMG["inicio-Post4"]}`}
            />}
          {userDB.inicio == "PostTwo" && <PostTwo topic="inicio" post1={`${postsIMG["inicio-Post1"] && postsIMG["inicio-Post1"]}`}
            post2={`${postsIMG["inicio-Post2"] && postsIMG["inicio-Post2"]}`}
            post3={`${postsIMG["inicio-Post3"] && postsIMG["inicio-Post3"]}`}
            post4={`${postsIMG["inicio-Post4"] && postsIMG["inicio-Post4"]}`}
            post5={`${postsIMG["inicio-Post5"] && postsIMG["inicio-Post5"]}`} 
            />}
          {userDB.inicio == "PostThree" && <PostThree topic="inicio" post1={`${postsIMG["inicio-Post1"] && postsIMG["inicio-Post1"]}`}
            post2={`${postsIMG["inicio-Post2"] && postsIMG["inicio-Post2"]}`}
            post3={`${postsIMG["inicio-Post3"] && postsIMG["inicio-Post3"]}`}
            post4={`${postsIMG["inicio-Post4"] && postsIMG["inicio-Post4"]}`}
            post5={`${postsIMG["inicio-Post5"] && postsIMG["inicio-Post5"]}`}
            post6={`${postsIMG["inicio-Post6"] && postsIMG["inicio-Post6"]}`} />}
        </div>
        <div>
        {userDB.sociedad !== null && <Form topic="sociedad" value={userDB.sociedad}></Form>}
          {userDB.sociedad == "PostOne" &&
            <PostOne topic="sociedad" post1={`${postsIMG["sociedad-Post1"] && postsIMG["sociedad-Post1"]}`}
              post2={`${postsIMG["sociedad-Post2"] && postsIMG["sociedad-Post2"]}`}
              post3={`${postsIMG["sociedad-Post3"] && postsIMG["sociedad-Post3"]}`}
              post4={`${postsIMG["sociedad-Post4"] && postsIMG["sociedad-Post4"]}`} />}
          {userDB.sociedad == "PostTwo" && <PostTwo topic="sociedad" post1={`${postsIMG["sociedad-Post1"] && postsIMG["sociedad-Post1"]}`}
            post2={`${postsIMG["sociedad-Post2"] && postsIMG["sociedad-Post2"]}`}
            post3={`${postsIMG["sociedad-Post3"] && postsIMG["sociedad-Post3"]}`}
            post4={`${postsIMG["sociedad-Post4"] && postsIMG["sociedad-Post4"]}`}
            post5={`${postsIMG["sociedad-Post5"] && postsIMG["sociedad-Post5"]}`} />}
          {userDB.sociedad == "PostThree" && <PostThree topic="sociedad" post1={`${postsIMG["sociedad-Post1"] && postsIMG["sociedad-Post1"]}`}
            post2={`${postsIMG["sociedad-Post2"] && postsIMG["sociedad-Post2"]}`}
            post3={`${postsIMG["sociedad-Post3"] && postsIMG["sociedad-Post3"]}`}
            post4={`${postsIMG["sociedad-Post4"] && postsIMG["sociedad-Post4"]}`}
            post5={`${postsIMG["sociedad-Post5"] && postsIMG["sociedad-Post5"]}`}
            post6={`${postsIMG["sociedad-Post6"] && postsIMG["sociedad-Post6"]}`} />}
        </div>
        <div>
          <Form topic="seguridad" value={userDB.seguridad}></Form>
          {userDB.seguridad == "PostOne" &&
            <PostOne topic="seguridad" post1={`${postsIMG["seguridad-Post1"] && postsIMG["seguridad-Post1"]}`}
              post2={`${postsIMG["seguridad-Post2"] && postsIMG["seguridad-Post2"]}`}
              post3={`${postsIMG["seguridad-Post3"] && postsIMG["seguridad-Post3"]}`}
              post4={`${postsIMG["seguridad-Post4"] && postsIMG["seguridad-Post4"]}`} />}
          {userDB.seguridad == "PostTwo" && <PostTwo topic="seguridad" post1={`${postsIMG["seguridad-Post1"] && postsIMG["seguridad-Post1"]}`}
            post2={`${postsIMG["seguridad-Post2"] && postsIMG["seguridad-Post2"]}`}
            post3={`${postsIMG["seguridad-Post3"] && postsIMG["seguridad-Post3"]}`}
            post4={`${postsIMG["seguridad-Post4"] && postsIMG["seguridad-Post4"]}`}
            post5={`${postsIMG["seguridad-Post5"] && postsIMG["seguridad-Post5"]}`} />}
          {userDB.seguridad == "PostThree" && <PostThree topic="seguridad" post1={`${postsIMG["seguridad-Post1"] && postsIMG["seguridad-Post1"]}`}
            post2={`${postsIMG["seguridad-Post2"] && postsIMG["seguridad-Post2"]}`}
            post3={`${postsIMG["seguridad-Post3"] && postsIMG["seguridad-Post3"]}`}
            post4={`${postsIMG["seguridad-Post4"] && postsIMG["seguridad-Post4"]}`}
            post5={`${postsIMG["seguridad-Post5"] && postsIMG["seguridad-Post5"]}`}
            post6={`${postsIMG["seguridad-Post6"] && postsIMG["seguridad-Post6"]}`} />}
        </div>
        <div>
          <Form topic="pais" value={userDB.pais}></Form>
          {userDB.pais == "PostOne" &&
            <PostOne topic="pais" post1={`${postsIMG["pais-Post1"] && postsIMG["pais-Post1"]}`}
              post2={`${postsIMG["pais-Post2"] && postsIMG["pais-Post2"]}`}
              post3={`${postsIMG["pais-Post3"] && postsIMG["pais-Post3"]}`}
              post4={`${postsIMG["pais-Post4"] && postsIMG["pais-Post4"]}`} />}
          {userDB.pais == "PostTwo" && <PostTwo topic="pais" post1={`${postsIMG["pais-Post1"] && postsIMG["pais-Post1"]}`}
            post2={`${postsIMG["pais-Post2"] && postsIMG["pais-Post2"]}`}
            post3={`${postsIMG["pais-Post3"] && postsIMG["pais-Post3"]}`}
            post4={`${postsIMG["pais-Post4"] && postsIMG["pais-Post4"]}`}
            post5={`${postsIMG["pais-Post5"] && postsIMG["pais-Post5"]}`} />}
          {userDB.pais == "PostThree" && <PostThree topic="pais" post1={`${postsIMG["pais-Post1"] && postsIMG["pais-Post1"]}`}
            post2={`${postsIMG["pais-Post2"] && postsIMG["pais-Post2"]}`}
            post3={`${postsIMG["pais-Post3"] && postsIMG["pais-Post3"]}`}
            post4={`${postsIMG["pais-Post4"] && postsIMG["pais-Post4"]}`}
            post5={`${postsIMG["pais-Post5"] && postsIMG["pais-Post5"]}`}
            post6={`${postsIMG["pais-Post6"] && postsIMG["pais-Post6"]}`} />}
        </div>
        <div>
          <Form topic="economia" value={userDB.economia}></Form>
          {userDB.economia == "PostOne" &&
            <PostOne topic="economia" post1={`${postsIMG["economia-Post1"] && postsIMG["economia-Post1"]}`}
              post2={`${postsIMG["economia-Post2"] && postsIMG["economia-Post2"]}`}
              post3={`${postsIMG["economia-Post3"] && postsIMG["economia-Post3"]}`}
              post4={`${postsIMG["economia-Post4"] && postsIMG["economia-Post4"]}`} />}
          {userDB.economia == "PostTwo" && <PostTwo topic="economia" post1={`${postsIMG["economia-Post1"] && postsIMG["economia-Post1"]}`}
            post2={`${postsIMG["economia-Post2"] && postsIMG["economia-Post2"]}`}
            post3={`${postsIMG["economia-Post3"] && postsIMG["economia-Post3"]}`}
            post4={`${postsIMG["economia-Post4"] && postsIMG["economia-Post4"]}`}
            post5={`${postsIMG["economia-Post5"] && postsIMG["economia-Post5"]}`} />}
          {userDB.economia == "PostThree" && <PostThree topic="economia" post1={`${postsIMG["economia-Post1"] && postsIMG["economia-Post1"]}`}
            post2={`${postsIMG["economia-Post2"] && postsIMG["economia-Post2"]}`}
            post3={`${postsIMG["economia-Post3"] && postsIMG["economia-Post3"]}`}
            post4={`${postsIMG["economia-Post4"] && postsIMG["economia-Post4"]}`}
            post5={`${postsIMG["economia-Post5"] && postsIMG["economia-Post5"]}`}
            post6={`${postsIMG["economia-Post6"] && postsIMG["economia-Post6"]}`} />}
        </div>
        <div>
          <Form topic="internacional" value={userDB.internacional}></Form>
          {userDB.internacional == "PostOne" &&
            <PostOne topic="internacional" post1={`${postsIMG["internacional-Post1"] && postsIMG["internacional-Post1"]}`}
              post2={`${postsIMG["internacional-Post2"] && postsIMG["internacional-Post2"]}`}
              post3={`${postsIMG["internacional-Post3"] && postsIMG["internacional-Post3"]}`}
              post4={`${postsIMG["internacional-Post4"] && postsIMG["internacional-Post4"]}`} />}
          {userDB.internacional == "PostTwo" && <PostTwo topic="internacional" post1={`${postsIMG["internacional-Post1"] && postsIMG["internacional-Post1"]}`}
            post2={`${postsIMG["internacional-Post2"] && postsIMG["internacional-Post2"]}`}
            post3={`${postsIMG["internacional-Post3"] && postsIMG["internacional-Post3"]}`}
            post4={`${postsIMG["internacional-Post4"] && postsIMG["internacional-Post4"]}`}
            post5={`${postsIMG["internacional-Post5"] && postsIMG["internacional-Post5"]}`} />}
          {userDB.internacional == "PostThree" && <PostThree topic="internacional" post1={`${postsIMG["internacional-Post1"] && postsIMG["internacional-Post1"]}`}
            post2={`${postsIMG["internacional-Post2"] && postsIMG["internacional-Post2"]}`}
            post3={`${postsIMG["internacional-Post3"] && postsIMG["internacional-Post3"]}`}
            post4={`${postsIMG["internacional-Post4"] && postsIMG["internacional-Post4"]}`}
            post5={`${postsIMG["internacional-Post5"] && postsIMG["internacional-Post5"]}`}
            post6={`${postsIMG["internacional-Post6"] && postsIMG["internacional-Post6"]}`} />}
        </div>
        <div>
          <Form topic="deportes" value={userDB.deportes}></Form>
          {userDB.deportes == "PostOne" &&
            <PostOne topic="deportes" post1={`${postsIMG["deportes-Post1"] && postsIMG["deportes-Post1"]}`}
              post2={`${postsIMG["deportes-Post2"] && postsIMG["deportes-Post2"]}`}
              post3={`${postsIMG["deportes-Post3"] && postsIMG["deportes-Post3"]}`}
              post4={`${postsIMG["deportes-Post4"] && postsIMG["deportes-Post4"]}`} />}
          {userDB.deportes == "PostTwo" && <PostTwo topic="deportes" post1={`${postsIMG["deportes-Post1"] && postsIMG["deportes-Post1"]}`}
            post2={`${postsIMG["deportes-Post2"] && postsIMG["deportes-Post2"]}`}
            post3={`${postsIMG["deportes-Post3"] && postsIMG["deportes-Post3"]}`}
            post4={`${postsIMG["deportes-Post4"] && postsIMG["deportes-Post4"]}`}
            post5={`${postsIMG["deportes-Post5"] && postsIMG["deportes-Post5"]}`} />}
          {userDB.deportes == "PostThree" && <PostThree topic="deportes" post1={`${postsIMG["deportes-Post1"] && postsIMG["deportes-Post1"]}`}
            post2={`${postsIMG["deportes-Post2"] && postsIMG["deportes-Post2"]}`}
            post3={`${postsIMG["deportes-Post3"] && postsIMG["deportes-Post3"]}`}
            post4={`${postsIMG["deportes-Post4"] && postsIMG["deportes-Post4"]}`}
            post5={`${postsIMG["deportes-Post5"] && postsIMG["deportes-Post5"]}`}
            post6={`${postsIMG["deportes-Post6"] && postsIMG["deportes-Post6"]}`} />}
        </div>
      </main>
    </div>
  )
}

export default WithAuth(Admin)










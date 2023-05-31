import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import mypic from '@/assets/avatarUser.jpg'
const MyImage = (props) => {
  return (
    <Image
      src={mypic}
      alt="Picture of the author"
      placeholder="blur"
      className={styles.avatarUser} // placeholder="empty" 
  />)}

export default function Home() {
  return (
    <>
      <Head>

      </Head>

      
      <div className={styles.mainDiv}>

        <div className={styles.navbar}>
          

          <div className={styles.centerIcons}>
            <div className={styles.logo}>
              <span className={styles.logotype}>LOGO</span>
            </div>
            <a className={styles.navItem} href='#'><img src='./home.svg' className={styles.navIcon}></img></a>
            <a className={styles.navItem} href='#'><img src='./activity.svg' className={styles.navIcon}></img></a>
            <a className={styles.navItem} href='#'><img src='./bookmark.svg' className={styles.navIcon}></img></a>
            <a className={styles.navItem} href='#'><img src='./chart.svg' className={styles.navIcon}></img></a>
            <a className={styles.navItem} href='#'><img src='./message.svg' className={styles.navIcon}></img></a>
            <a className={styles.navItem} href='#'><img src='./search.svg' className={styles.navIcon}></img></a>
            <a className={styles.navLastItem} href='#'><img src='./setting.svg' className={styles.navIcon}></img></a>
          </div>
          
          


        </div>
        
        <div className={styles.watchlist}>
          
          <div className={styles.titleLine}>
              <a className={styles.heading}>Good Afternoon!</a>
              <div className={styles.logBar}>
                <img src='./calendar.svg' className={styles.dropdown2}></img>
                <img src='./notification.svg' className={styles.dropdown2}></img>

                <MyImage className={styles.avatarUser}/>

                <img src='./arrow.svg' className={styles.dropdown}></img>
              </div>
          </div>

          <div className={styles.blockOne}>
            <div className={styles.headLine}>
                <a className={styles.title}>Watch Lists</a>
                <a className={styles.add} href="#addNew">Add +</a>
              </div>
            
            <div className={styles.watchTable}>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText1}>Type</span></div>

                <div className={styles.position2}><span className={styles.posText1}>Model</span></div>

                <div className={styles.position3}><span className={styles.posText1}>Year</span></div>

                <div className={styles.position4}><span className={styles.posText1}>Cost</span></div>
              </div>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText}>Seat</span></div>

                <div className={styles.position2}><span className={styles.posText}>Leon Cupra</span></div>

                <div className={styles.position3}><span className={styles.posText}>2012</span></div>

                <div className={styles.position4}><span className={styles.posText}>18.000$</span></div>
              </div>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText}>Ford</span></div>

                <div className={styles.position2}><span className={styles.posText}>Taurus</span></div>

                <div className={styles.position3}><span className={styles.posText}>2020</span></div>

                <div className={styles.position4}><span className={styles.posText}>29.000$</span></div>
              </div>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText}>Chevy</span></div>

                <div className={styles.position2}><span className={styles.posText}>Astra</span></div>

                <div className={styles.position3}><span className={styles.posText}>2016</span></div>

                <div className={styles.position4}><span className={styles.posText}>6.000$</span></div>
              </div>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText}>Mitsubishi</span></div>

                <div className={styles.position2}><span className={styles.posText}>Lancer</span></div>

                <div className={styles.position3}><span className={styles.posText}>2015</span></div>

                <div className={styles.position4}><span className={styles.posText}>12.000$</span></div>
              </div>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText}>Ford</span></div>

                <div className={styles.position2}><span className={styles.posText}>Escape</span></div>

                <div className={styles.position3}><span className={styles.posText}>2017</span></div>

                <div className={styles.position4}><span className={styles.posText}>20.000$</span></div>
              </div>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText}>Toyota</span></div>

                <div className={styles.position2}><span className={styles.posText}>Corolla</span></div>

                <div className={styles.position3}><span className={styles.posText}>2020</span></div>

                <div className={styles.position4}><span className={styles.posText}>30.000$</span></div>
              </div>

              <div className={styles.watchRow}>
                <div className={styles.position1}><span className={styles.posText}>Chevy</span></div>

                <div className={styles.position2}><span className={styles.posText}>Corsa</span></div>

                <div className={styles.position3}><span className={styles.posText}>2006</span></div>

                <div className={styles.position4}><span className={styles.posText}>4.000$</span></div>
              </div>

              
            </div>
          </div>

          <div className={styles.blockTwo}>
            <div className={styles.headLine2}>
                <a className={styles.title}>Latest Notifications</a>
                <a className={styles.add} href="#">Clear all</a>
            </div>

            <div className={styles.watchTable}>

              <div className={styles.watchNotify}>
                <div className={styles.parentalTwo}>
                  <div className={styles.squarePage}></div>

                  <div className={styles.content}>
                    <a className={styles.notifyTitle}>Se ha encontrado Taurus a 50% off</a>
                    <a className={styles.notifyCaption}>Publicado como nuevo</a>
                  </div>

                  <a className={styles.notifyClose} href="#">X</a>
                </div>
              </div>

              <div className={styles.watchNotify}>
                <div className={styles.parentalTwo}>
                  <div className={styles.squarePage}></div>

                  <div className={styles.content}>
                    <a className={styles.notifyTitle}>Se ha encontrado Taurus a 50% off</a>
                    <a className={styles.notifyCaption}>Publicado como nuevo</a>
                  </div>

                  <a className={styles.notifyClose} href="#">X</a>
                </div>
              </div>

            </div>
          </div>

          

        </div>
        
        <div className={styles.addNewContainer} id='addNew'>
          <a href='#' className={styles.close}>X</a>

          <div className={styles.formAddNew}>
            <span className={styles.formTitle}>Agregar un nuevo vehiculo</span>
            <input type='text' onChange={handleInputA} className={styles.inputAdd} placeholder='Nombre'></input>
            <input type='date' onChange={handleInputB} className={styles.inputAdd} placeholder='Ano'></input>

            <a href="#" className={styles.ctaForm}>Agregar</a>
          </div>
        </div>
      </div>

    </>
  )
}

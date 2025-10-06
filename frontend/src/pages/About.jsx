import React from 'react'
import PageTitle from '../components/PageTitle'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='about-page'>

      <PageTitle text1={"About"} text2={'US'} sub={'Here is a little tale about our fashion empire'} />

      <div className='about-page-main'>

        <article className='d-block my-3'>
          <div className='d-flex gap-2'>
            <div className='col-6'>
              <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem neque excepturi et esse ipsum cum earum ipsam dicta voluptate laudantium, ab maxime magnam praesentium! Dolore alias vitae commodi quae!</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil saepe officia reprehenderit aspernatur consequatur architecto?</p>

              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod illum ab repellat aperiam ea sunt! Obcaecati eveniet nobis, iusto aspernatur debitis veritatis voluptatum, molestiae, nesciunt eligendi dicta delectus. Nam asperiores porro quidem earum, quisquam omnis dignissimos, ducimus eveniet ratione mollitia adipisci, voluptate inventore ea laborum suscipit! Harum similique itaque vel!
            </div>

            <div className='col-6'>
              <img style={{width: '100%', border: '2px solid grey'}} src={assets.hero_img} alt="" />
            </div>
          </div>

          <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt vero, dolores nobis asperiores repudiandae eligendi. Ipsam aliquam culpa molestiae impedit exercitationem numquam pariatur harum voluptate distinctio error officia quam voluptatem, debitis facilis eligendi commodi hic laudantium quos sequi rerum praesentium id magni, tempora earum. Vero blanditiis, aut similique optio dolor nisi provident eius! Accusantium eius dolor labore qui sequi, ipsum minima beatae expedita, ea tempora illo quos nostrum praesentium, pariatur adipisci fugiat. Iure, dignissimos nostrum! Hic quisquam necessitatibus voluptatibus. Accusantium nobis illum ipsum eius quaerat aperiam dolore soluta? Est similique odio, molestiae illo officia accusamus sed libero nobis velit.</p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eligendi possimus. Quasi est harum vel soluta, cupiditate dolores iste recusandae, atque nihil nam similique odio modi doloribus facilis distinctio veniam! Eius voluptatem saepe debitis expedita. Quasi inventore nulla recusandae exercitationem laborum totam harum rem, minus numquam aspernatur ab doloremque ea eligendi nobis sapiente consequatur quidem? Odio corrupti a molestias laboriosam quis quos quae temporibus, omnis quas, minus, ipsam eligendi eum at voluptas excepturi vel! Earum quae voluptas corporis impedit ullam saepe ratione nam ea doloribus itaque aut error adipisci temporibus cum reprehenderit numquam, iusto optio architecto eius totam deleniti eligendi?
        </article>

      </div>

    </div>
  )
}

export default About
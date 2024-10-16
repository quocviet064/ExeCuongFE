import gyufyufyu from '@assets/img/images/gyufyufyu.png';
import plant1 from '@assets/img/images/plant1.jpg';
import plant2 from '@assets/img/images/plant2.jpg';
import plant3 from '@assets/img/images/plant3.jpg';
import img1 from '@assets/img/images/1.jpg';
import img2 from '@assets/img/images/2.jpg';
import img3 from '@assets/img/images/3.jpg';
import img4 from '@assets/img/images/4.jpg';
import img5 from '@assets/img/images/5.jpg';
import img6 from '@assets/img/images/6.jpg';
import map from '@assets/img/images/map.jpg';
import contactimg from '@assets/img/images/contactimg.jpg';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <>
      <section>
        <div
          id='main_slider'
          className='carousel slide banner-main'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#main_slider'
              data-slide-to={0}
              className='active'
            />
            <li data-target='#main_slider' data-slide-to={1} />
            <li data-target='#main_slider' data-slide-to={2} />
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='container'>
                <div className='row marginii'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='carousel-caption '>
                      <h1>
                        Welcome To The{' '}
                        <strong className='color'>Nutrients Plants</strong>
                      </h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using
                      </p>
                      <a
                        className='btn btn-lg btn-primary'
                        href='#'
                        role='button'
                      >
                        About
                      </a>
                      <a
                        className='btn btn-lg btn-primary'
                        href='#'
                        role='button'
                      >
                        Contact US
                      </a>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='img-box'>
                      <figure>
                        <Image src={gyufyufyu} alt='img' />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='container'>
                <div className='row marginii'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='carousel-caption '>
                      <h1>
                        Welcome To The{' '}
                        <strong className='color'>Nutrients Plants</strong>
                      </h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using
                      </p>
                      <a
                        className='btn btn-lg btn-primary'
                        href='#'
                        role='button'
                      >
                        About
                      </a>
                      <a
                        className='btn btn-lg btn-primary'
                        href='#'
                        role='button'
                      >
                        Contact US
                      </a>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='img-box '>
                      <figure>
                        <Image src={gyufyufyu} alt='img' />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='container'>
                <div className='row marginii'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='carousel-caption '>
                      <h1>
                        Welcome To The{' '}
                        <strong className='color'>Nutrients Plants</strong>
                      </h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using
                      </p>
                      <a
                        className='btn btn-lg btn-primary'
                        href='#'
                        role='button'
                      >
                        About
                      </a>
                      <a
                        className='btn btn-lg btn-primary'
                        href='#'
                        role='button'
                      >
                        Contact US
                      </a>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='img-box'>
                      <figure>
                        <Image src={gyufyufyu} alt='img' />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* plant */}
      <div id='plant' className='plants'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 '>
              <div className='titlepage'>
                <h2>Our Wonderful plants</h2>
                <span>
                  looking at its layout. The point of using Lorem Ipsumletters,
                  as opposed to usingl
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='plants-box'>
                <figure>
                  {/* <img src='images/plant1.jpg' alt='img' /> */}
                  <Image src={plant1} alt='plant1' />
                </figure>
                <h3> Floral Vibrant</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumletters, as opposed to using
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='plants-box'>
                <figure>
                  {/* <img src='images/plant2.jpg' alt='img' /> */}
                  <Image src={plant2} alt='plant2' />
                </figure>
                <h3> Floral Vibrant</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumletters, as opposed to using
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='plants-box'>
                <figure>
                  {/* <img src='images/plant3.jpg' alt='img' /> */}
                  <Image src={plant3} alt='plant3' />
                </figure>
                <h3> Floral Vibrant</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumletters, as opposed to using
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='plants-box'>
                <figure>
                  {/* <img src='images/plant1.jpg' alt='img' /> */}
                  <Image src={plant1} alt='plant1' />
                </figure>
                <h3> Floral Vibrant</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumletters, as opposed to using
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='plants-box'>
                <figure>
                  {/* <img src='images/plant2.jpg' alt='img' /> */}
                  <Image src={plant2} alt='plant2' />
                </figure>
                <h3> Floral Vibrant</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumletters, as opposed to using
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='plants-box'>
                <figure>
                  {/* <img src='images/plant3.jpg' alt='img' /> */}
                  <Image src={plant3} alt='plant3' />
                </figure>
                <h3> Floral Vibrant</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumletters, as opposed to using
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end plant */}
      {/* about */}
      <div id='about' className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <div className='about-box'>
                  <h2>50</h2>
                  <div className='white-bg'>
                    <span>Satisfaction</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <div className='about-box'>
                  <h2>50</h2>
                  <div className='white-bg'>
                    <span>Free Delivery</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <div className='about-box'>
                  <h2>50</h2>
                  <div className='white-bg'>
                    <span>Store Locators</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='about-box'>
                <div className='titlepage'>
                  <h2>About US</h2>
                  <span>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using `&apos;`Content here, content here`&apos;`, making it
                    look like readable English. Many desktop publishing packages
                    and It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using `&apos;`Content here, content here`&apos;`, making it
                    look like readable English. Many desktop publishing packages
                    and web pageweb page
                  </span>
                  <div className='read-more'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about */}
      {/*Gallery */}
      <div id='gallery' className='Gallery'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='titlepage'>
                <h2>Our Gallery </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid margin-r-l'>
          <div className='row'>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb'>
              <div className='Gallery-box'>
                <figure>
                  <a href='images/1.jpg' className='fancybox' rel='ligthbox'>
                    {/* <img
                      src='images/1.jpg'
                      className='zoom img-fluid '
                      alt=''
                    /> */}
                    <Image src={img1} alt='img1' className='zoom img-fluid ' />
                  </a>
                  <span className='hoverle'>
                    <a href='images/1.jpg' className='fancybox' rel='ligthbox'>
                      View
                    </a>
                  </span>
                </figure>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb'>
              <div className='Gallery-box'>
                <figure>
                  <a href='images/2.jpg' className='fancybox' rel='ligthbox'>
                    {/* <img
                      src='images/2.jpg'
                      className='zoom img-fluid '
                      alt=''
                    /> */}
                    <Image src={img2} alt='img2' className='zoom img-fluid ' />
                  </a>
                  <span className='hoverle'>
                    <a href='images/1.jpg' className='fancybox' rel='ligthbox'>
                      View
                    </a>
                  </span>
                </figure>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 thumb'>
              <div className='Gallery-box'>
                <figure>
                  <a href='images/3.jpg' className='fancybox' rel='ligthbox'>
                    {/* <img
                      src='images/3.jpg'
                      className='zoom img-fluid '
                      alt=''
                    /> */}
                    <Image src={img3} alt='img3' className='zoom img-fluid ' />
                  </a>
                  <span className='hoverle'>
                    <a href='images/3.jpg' className='fancybox' rel='ligthbox'>
                      View
                    </a>
                  </span>
                </figure>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb'>
              <div className='Gallery-box'>
                <figure>
                  <a href='images/4.jpg' className='fancybox' rel='ligthbox'>
                    <Image src={img4} alt='img4' className='zoom img-fluid ' />
                  </a>
                  <span className='hoverle'>
                    <a href='images/4.jpg' className='fancybox' rel='ligthbox'>
                      View
                    </a>
                  </span>
                </figure>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb'>
              <div className='Gallery-box'>
                <figure>
                  <a href='images/5.jpg' className='fancybox' rel='ligthbox'>
                    <Image src={img5} alt='img5' className='zoom img-fluid ' />
                  </a>
                  <span className='hoverle'>
                    <a href='images/5.jpg' className='fancybox' rel='ligthbox'>
                      View
                    </a>
                  </span>
                </figure>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='Gallery-box'>
                <figure>
                  <a href='images/6.jpg' className='fancybox' rel='ligthbox'>
                    {/* <img
                      src='images/6.jpg'
                      className='zoom img-fluid '
                      alt=''
                    /> */}
                    <Image src={img6} alt='img6' className='zoom img-fluid ' />
                  </a>
                  <span className='hoverle'>
                    <a href='images/6.jpg' className='fancybox' rel='ligthbox'>
                      View
                    </a>
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* end Gallery */}
        {/*contact */}
        <div id='contact' className='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='titlepage'>
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 paddimg-right'>
                <div className='row'>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <form>
                      <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <input
                            className='form-control'
                            placeholder='Name'
                            type='text'
                            name='Name'
                          />
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <input
                            className='form-control'
                            placeholder='Email'
                            type='text'
                            name='Email'
                          />
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <input
                            className='form-control'
                            placeholder='Phone'
                            type='text'
                            name='Phone'
                          />
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <textarea
                            className='textarea>'
                            placeholder='Message'
                            type='text'
                            name='Message'
                            defaultValue={''}
                          />
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <a href='#'>Read More</a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <div className='map_section'>
                      <figure>
                        {/* <img src='images/map.jpg' /> */}
                        <Image src={map} alt='map' />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 paddimg-left'>
                <div className='Nursery-img'>
                  <figure>
                    {/* <img src='images/contactimg.jpg' alt='img' /> */}
                    <Image src={contactimg} alt='contactimg' />
                    <div className='text-box'>
                      <h3>Best Green Nursery</h3>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

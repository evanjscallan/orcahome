import 'bootstrap/dist/css/bootstrap.min.css'

import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import arrow from '../images/Arrow.png'
import orcas from '../images/homepage.png'
import map from '../images/homepagemap.png'
import vector from '../images/vector.png'
import indexStyles from '../styles/Index.module.css'

export const index = () => {
  return (
    <>
      <Head>
        <title>Orcasound | listen live for orcas</title>
        <meta
          name="keywords"
          content="orcasound allows you to listen to live southern killer resident whales live through our hydrophones"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={indexStyles.landing}>
        <Image className={indexStyles.landingImage} src={orcas} />
        <div className={indexStyles.vector}>
          <Image src={vector} />
        </div>
        <div className={indexStyles.flex}>
          <span>
            <h1 className={indexStyles.landingText}>LISTEN TO ORCAS LIVE!</h1>{' '}
          </span>
          <span className={indexStyles.landingArrow}>
            <Image src={arrow} width="30px" height="30px" />
          </span>
        </div>
      </div>

      <div className={indexStyles.home}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
        <body>
          <br></br>
          <h1 className={indexStyles.landingIntro}> What is Orcasound</h1>
          <br></br>

          <p className={indexStyles.paragraph}>
            {' '}
            Orcasound connects your headphones to live hydrophones (underwater
            microphones), your ears to an ocean of sound.
            <br></br>
            <br></br>
            Orcasound help us explore and conserve marine life around the globe,
            starting with studying and saving the southern resident killer
            whales of the Pacific Northwest. At Orcasound you can listen for
            whales or learn more about marine bioacoustics.
          </p>

          <Row className={indexStyles.card}>
            <Col
              md={{ order: 1 }}
              xs={{ order: 2 }}
              className={indexStyles.col}
            >
              <Card className="border-0 text-center">
                <Card.Img
                  variant="top"
                  src="https://i2.wp.com/www.orcasound.net/wp2017/wp-content/uploads/2020/10/Screen-Shot-2020-10-20-at-1.40.28-PM.png?resize=750%2C725&ssl=1"
                />
                <Card.Body>
                  <Card.Text className={indexStyles.cardText2}>
                    Current Orcasound hydrophone locations
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={{ order: 2 }}
              xs={{ order: 1 }}
              className={indexStyles.col}
            >
              <Card className="border-0">
                <Card.Body>
                  <Card.Title className={indexStyles.cardTitle}>
                    {' '}
                    Hydrophone Location
                  </Card.Title>
                  <br></br>
                  <Card.Text className={indexStyles.cardText}>
                    Orcasound is a cooperative hydrophne network and an
                    open-source software & hardware project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={{ order: 3 }}
              xs={{ order: 3 }}
              className={indexStyles.col}
            >
              <Card className="border-0">
                <Card.Body>
                  <Card.Text className={indexStyles.cardText}>
                    We Welcome your participation. If you'd like to host a
                    hydrophone, do research or incorporate Orcasound into the
                    educational or research efforts of your organization , you
                    can join us as a member of the network.
                    <br></br>
                  </Card.Text>
                  <div className={indexStyles.button}>
                    <br></br>
                    <Button className={indexStyles.cardButton}>
                      {' '}
                      LEARN
                    </Button>{' '}
                    <Button className={indexStyles.cardButton}>
                      {' '}
                      GET INVOLVED!
                    </Button>{' '}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Grid container spacing={1}></Grid>
        </body>
      </div>
    </>
  )
}

export default index

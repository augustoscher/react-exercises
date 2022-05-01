import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import ImageCard from 'components/ImageCard'
import Grid from 'components/Grid'

const items = [
  {
    title: 'Camera',
    src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    alt: 'camera'
  },
  {
    title: 'Trees',
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: 'trees'
  },
  {
    title: 'Camera',
    src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    alt: 'camera'
  },
  {
    title: 'Trees',
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: 'trees'
  },
  {
    title: 'Camera',
    src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    alt: 'camera'
  },
  {
    title: 'Trees',
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: 'trees'
  },
  {
    title: 'Camera',
    src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    alt: 'camera'
  },
  {
    title: 'Trees',
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: 'trees'
  },
  {
    title: 'Camera',
    src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    alt: 'camera'
  },
  {
    title: 'Trees',
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: 'trees'
  },
  {
    title: 'Camera',
    src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    alt: 'camera'
  },
  {
    title: 'Trees',
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: 'trees'
  }
]

const CssEffectsPage = () => (
  <Base>
    <ExampleDescription
      title="Css Effects"
      description="Some nice css effects with styled-components"
      tags={['styled components', 'css']}
    />

    <h3>Resize ImageCard Grid</h3>
    <Grid>
      {items.map((item, idx) => (
        <ImageCard key={idx} {...item} />
      ))}
    </Grid>

    {/* <hr /> */}
    {/* <h3>Grid</h3> */}
    {/* <Grid></Grid> */}
  </Base>
)

export default CssEffectsPage

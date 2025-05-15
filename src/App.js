import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const navLinks = [
  { index: 0, name: 'About', url: 'https://www.components.com/about' },
  { index: 1, name: 'Projects', url: 'https://www.components.com/projects' },
  { index: 2, name: 'Contact', url: 'https://www.components.com/contact' },
  { index: 3, name: 'Blogs', url: 'https://www.components.com/blogs' }
];

  const footerLinks = ['Services', 'About', 'Contact'];

  const images = [
    {
      id: 1,
      title: 'Jurassic Park',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg'
    },
    {
      id: 2,
      title: 'The Lion King',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-lion-king.jpg'
    },
    {
      id: 3,
      title: 'Avengers: Infinity War',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg'
    },
    {
      id: 4,
      title: 'The Shining',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-shining.jpg'
    }
  ];

  return (
    <>
      <Header title="My React App" links={navLinks} />

      <main>
        <div className="container">
          <Banner
            title="Welcome to My Site"
            text="Explore awesome projects and articles."
            primaryText="Get Started"
            secondaryText="Learn More"
          />

          <Gallery list={images} />
        </div>
      </main>

      <Footer links={footerLinks} />
    </>
  );
}

export default App;



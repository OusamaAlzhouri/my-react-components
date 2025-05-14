import Header from './components/Header';

const navLinks = [
  { label: 'About', url: 'https://www.components.com/about' },
  { label: 'Projects', url: 'https://www.components.com/projects' },
  { label: 'Contact', url: 'https://www.components.com/contact' },
  { label: 'Blogs', url: 'https://www.components.com/blogs' }
];

function App() {
  return (
    <>
      <Header title="My Portfolio" links={navLinks} />
      {/* More components will go here later */}
    </>
  );
}


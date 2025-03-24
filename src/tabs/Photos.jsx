import { useState, useEffect } from 'react';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { getPhotos } from '../apiService/photos';

const Photos = () => {
  const [images, setImages] = useState([]); // Масив зображень
  const [query, setQuery] = useState(''); // Пошуковий запит
  const [page, setPage] = useState(1); // Номер сторінки
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(false); 

  // Функція для отримання пошукового слова
  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]); 
  };

  // Функція-обробник кнопки "Load More"
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

 
  useEffect(() => {
    if (!query) return; 

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getPhotos(query, page);
        setImages(prevImages => [...prevImages, ...data.photos]); 
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <>
      <Form onSubmit={handleSearch} />
      {isLoading && <Loader />} 
      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Помилка завантаження!
        </p>
      )}
      <PhotosGallery images={images} />
      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </>
  );
};

export default Photos;

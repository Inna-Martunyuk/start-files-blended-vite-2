import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
const PhotosGallery = ({images}) => {
  return (
    <Grid>
      {images.map(({ id, avg_color, src, alt }) => (
        <GridItem key={id}>
          <PhotosGalleryItem src={src} alt={alt} avg_color={avg_color} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;

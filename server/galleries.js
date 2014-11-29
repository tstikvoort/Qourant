if (photoGalleries.find().count() === 0) {
    photoGalleries.insert({
        _id: 'E6WzX2BPZERhF6dQ6',
        title: 'Introducing San Francisco',
        date: new Date().getDate()
    });
    photoGalleries.insert({
        _id: 'J3tQjxRi84uZ8TvhY',
        title: 'On the move',
        date: new Date().getDate()
    });

}
if (galleryPhotos.find().count() === 0) {
    galleryPhotos.insert({
        url: '/uploads/E6WzX2BPZERhF6dQ6/1.jpg',
        gallery_id: 'E6WzX2BPZERhF6dQ6'
    });
    galleryPhotos.insert({
        url: '/uploads/E6WzX2BPZERhF6dQ6/2.jpg',
        gallery_id: 'E6WzX2BPZERhF6dQ6'
    });
    galleryPhotos.insert({
        url: '/uploads/E6WzX2BPZERhF6dQ6/3.jpg',
        gallery_id: 'E6WzX2BPZERhF6dQ6'
    });
    galleryPhotos.insert({
        url: '/uploads/E6WzX2BPZERhF6dQ6/4.jpg',
        gallery_id: 'E6WzX2BPZERhF6dQ6'
    });
    galleryPhotos.insert({
        url: '/uploads/E6WzX2BPZERhF6dQ6/5.jpg',
        gallery_id: 'E6WzX2BPZERhF6dQ6'
    });
    galleryPhotos.insert({
        url: '/uploads/J3tQjxRi84uZ8TvhY/1.jpg',
        gallery_id: 'J3tQjxRi84uZ8TvhY'
    });
    galleryPhotos.insert({
        url: '/uploads/J3tQjxRi84uZ8TvhY/2.jpg',
        gallery_id: 'J3tQjxRi84uZ8TvhY'
    });
    galleryPhotos.insert({
        url: '/uploads/J3tQjxRi84uZ8TvhY/3.jpg',
        gallery_id: 'J3tQjxRi84uZ8TvhY'
    });
    galleryPhotos.insert({
        url: '/uploads/J3tQjxRi84uZ8TvhY/4.jpg',
        gallery_id: 'J3tQjxRi84uZ8TvhY'
    });
    galleryPhotos.insert({
        url: '/uploads/J3tQjxRi84uZ8TvhY/5.jpg',
        gallery_id: 'J3tQjxRi84uZ8TvhY'
    });
}
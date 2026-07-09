import React from 'react';
import Layout from '@theme/Layout';

const photos = [
  // TODO: 替换为实际照片
  // { id: 1, url: '/img/album/photo1.jpg', caption: '照片描述' },
];

const AlbumPage: React.FC = () => {
  if (photos.length === 0) {
    return (
      <Layout title="相册" description="GUETSEC 活动相册">
        <div className="container margin-vert--xl">
          <div className="text--center">
            <h1>相册</h1>
            <p>活动照片即将上线，敬请期待。</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="相册" description="GUETSEC 活动相册">
      <div className="container margin-vert--xl">
        <div className="text--center margin-bottom--xl">
          <h1>相册</h1>
        </div>
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col col--4 margin-bottom--md">
              <div className="card">
                <div className="card__image">
                  <img src={photo.url} alt={photo.caption} loading="lazy" />
                </div>
                <div className="card__body">
                  <p>{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AlbumPage;

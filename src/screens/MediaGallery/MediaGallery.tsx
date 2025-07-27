import React, { useEffect, useState } from 'react';
import './MediaGallery.css';
import { InstagramService, InstagramMedia } from '../../services/InstagramService';

const translations = {
  en: {
    title: 'Media Gallery',
    tabs: { pinned: 'Pinned', recent: 'Recent' },
    loading: 'Loading...',
    error: 'Failed to load media.',
    empty: 'No media found for this filter.',
  },
  ua: {
    title: 'Медіа-галерея',
    tabs: { pinned: 'Закріплене', recent: 'Останнє' },
    loading: 'Завантаження...',
    error: 'Не вдалося завантажити медіа.',
    empty: 'Медіа для цього фільтра не знайдено.',
  },
};

type MediaGalleryProps = { language?: 'en' | 'ua' };

const FILTERS = [
  { key: 'pinned', labelKey: 'pinned' },
  { key: 'recent', labelKey: 'recent' },
];

const MediaGallery: React.FC<MediaGalleryProps> = ({ language = 'en' }) => {
  const t = translations[language];
  const [filter, setFilter] = useState<'pinned' | 'recent'>('pinned');
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    const fetchMedia = async () => {
      try {
        let data: InstagramMedia[] = [];
        if (filter === 'pinned') {
          data = await InstagramService.fetchPinnedContent();
        } else {
          data = await InstagramService.fetchRecentMedia();
        }
        if (isMounted) setMedia(data);
      } catch (e) {
        if (isMounted) setError(t.error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchMedia();
    return () => { isMounted = false; };
  }, [filter, t.error]);

  return (
    <section className="media-gallery-section">
      <h2>{t.title}</h2>
      <div className="media-gallery-tabs">
        {FILTERS.map(tab => (
          <button
            key={tab.key}
            className={`media-gallery-tab${filter === tab.key ? ' active' : ''}`}
            onClick={() => setFilter(tab.key as 'pinned' | 'recent')}
          >
            {t.tabs[tab.labelKey as 'pinned' | 'recent']}
          </button>
        ))}
      </div>
      {loading && <div className="media-gallery-fallback">{t.loading}</div>}
      {error && <div className="media-gallery-fallback error">{error}</div>}
      {!loading && !error && media.length === 0 && (
        <div className="media-gallery-fallback">{t.empty}</div>
      )}
      <div className="media-gallery-grid masonry">
        {media.map((item, i) =>
          item.media_type === 'IMAGE' ? (
            <img key={item.id || i} src={item.media_url} alt={item.caption || 'Instagram media'} className="media-item" />
          ) : (
            <video key={item.id || i} controls className="media-item" poster={item.thumbnail_url}>
              <source src={item.media_url} type="video/mp4" />
              {item.caption}
            </video>
          )
        )}
      </div>
    </section>
  );
};

export default MediaGallery; 
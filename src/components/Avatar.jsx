import { useState } from 'react';
import { profile } from '../config/site.js';

// Shows the real profile photo. If the file is missing (not added yet) or fails to load,
// it falls back once to a neutral initials placeholder, so there is never a broken image.
export default function Avatar({ alt = profile.photo.alt, className = '', priority = false, size = 96 }) {
  const [failed, setFailed] = useState(false);
  const src = failed ? profile.photo.fallback : profile.photo.src;

  return (
    <img
      // fetchpriority is set through a ref because React 18 and 19 spell this prop differently
      ref={(el) => {
        if (el && priority) el.setAttribute('fetchpriority', 'high');
      }}
      src={src}
      alt={alt}
      width={size}
      height={size}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={`block bg-elevated object-cover ${className}`}
    />
  );
}

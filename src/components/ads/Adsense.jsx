import { useEffect } from 'react';

const adsense = ({ adSlot, adFormat = 'auto', adStyle = { display: 'block' } }) => {
  useEffect(() => {
    try {
      // Push the ad to the adsbygoogle queue
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={adStyle}
      data-ad-client="YOUR-ADSENSE-CLIENT-ID"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
};

export default adsense;
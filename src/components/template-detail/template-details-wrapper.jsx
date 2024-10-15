import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import PriceFilter from '../templates/template-filter/price-filter';
import AreaFilter from '../templates/template-filter/area-filter';
import LocationTypeFilter from '../templates/template-filter/location-type-filter';
import VibeFilter from '../templates/template-filter/vibe-filter';
import ResetButton from '../templates/template-filter/reset-button';
import { handleModalClose } from '../../redux/features/productModalSlice';

const TemplateDetailsWrapper = ({ templateItem, maxPrice, maxArea, setCurrPage }) => {
  const dispatch = useDispatch();
  const { name, imageURl, price, area, locationType, vibe, plants } = templateItem || {};

  const getDirectImageUrl = (url) => {
    if (!url) return null;
    const parts = url.split('/');
    const id = parts[parts.length - 1];
    return `https://i.ibb.co/${id}/image.png`;
  };

  const directImageUrl = getDirectImageUrl(imageURl);

  const styles = {
    pageWrapper: {
      display: 'flex',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
    },
    sidebar: {
      width: '250px',
      marginRight: '50px',
      flexShrink: 0,
    },
    mainContent: {
      flex: 1,
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '400px',
    },
    noImage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      color: '#666',
    },
    info: {
      padding: '20px',
    },
    title: {
      fontSize: '24px',
      marginBottom: '15px',
      color: '#333',
    },
    detail: {
      marginBottom: '10px',
      fontSize: '16px',
      color: '#666',
    },
    plantsSection: {
      marginTop: '30px',
    },
    plantsTitle: {
      fontSize: '22px',
      marginBottom: '15px',
      color: '#333',
    },
    plantCard: {
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
    },
    plantName: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    plantDetail: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '5px',
    },
    additionalInfo: {
      marginTop: '10px',
    },
    additionalInfoTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#333',
    },
    buyNowBtn: {
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '10px 20px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '14px',
      margin: '10px 0',
      cursor: 'pointer',
      borderRadius: '4px',
      width: '100%',
    },
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.sidebar}>
        <PriceFilter maxPrice={maxPrice} setCurrPage={setCurrPage} />
        <AreaFilter maxArea={maxArea} setCurrPage={setCurrPage} />
        <LocationTypeFilter setCurrPage={setCurrPage} />
        <VibeFilter setCurrPage={setCurrPage} />
        <ResetButton setCurrPage={setCurrPage} />
      </div>
      <div style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            {directImageUrl ? (
              <Image 
                src={directImageUrl}
                alt={name}
                layout="fill"
                objectFit="cover"
                unoptimized={true}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available";
                }}
              />
            ) : (
              <div style={styles.noImage}>No Image Available</div>
            )}
          </div>
          <div style={styles.info}>
            <h3 style={styles.title}>{name}</h3>
            <p style={styles.detail}>Giá: {price?.toLocaleString()} VNĐ</p>
            <p style={styles.detail}>Diện tích: {area} m²</p>
            <p style={styles.detail}>Loại địa điểm: {locationType}</p>
            <p style={styles.detail}>Không khí: {vibe}</p>
            
          </div>
        </div>
        
        <div style={styles.plantsSection}>
          <h4 style={styles.plantsTitle}>Danh sách cây phù hợp cho mẫu thiết kế này:</h4>
          {plants && plants.map((plant) => (
            <div key={plant._id} style={styles.plantCard}>
              <h5 style={styles.plantName}>{plant.title}</h5>
              <p style={styles.plantDetail}>Giá: {plant.price?.toLocaleString()} VNĐ</p>
              <p style={styles.plantDetail}>Loại: {plant.category.name}</p>
              <p style={styles.plantDetail}>Mô tả: {plant.description}</p>
              <div style={styles.additionalInfo}>
                <p style={styles.additionalInfoTitle}>Thông tin bổ sung:</p>
                {plant.additionalInformation.map((info, index) => (
                  <p key={index} style={styles.plantDetail}>{info.key}: {info.value}</p>
                ))}
              </div>
              <Link href="/cart" onClick={() => dispatch(handleModalClose())}>
                <button style={styles.buyNowBtn}>Mua ngay</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailsWrapper;
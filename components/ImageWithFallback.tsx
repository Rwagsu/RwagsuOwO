'use client';

import React, { useState, useEffect } from 'react';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

interface ImageWithFallbackProps {
  src: string;
  alt?: string;
  className?: string;
  title?: string;
  width?: number;
  height?: number;
  [key: string]: any; // 允许其他属性
}

interface ImageDimensions {
  width?: number;
  height?: number;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  title,
  width: propWidth,
  height: propHeight,
  ...rest
}: ImageWithFallbackProps) {
  const [dimensions, setDimensions] = useState<ImageDimensions>(() => {
    // 如果已经有宽度和高度属性，则直接初始化
    if (propWidth && propHeight) {
      return { width: propWidth, height: propHeight };
    }
    return {};
  });

  const [loadingStatus, setLoadingStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>(() => {
    // 如果已经有宽度和高度属性，则直接标记为loaded
    if (propWidth && propHeight) {
      return 'loaded';
    }
    return 'loading';
  });

  useEffect(() => {
    // 如果已经有宽度和高度属性，则不需要执行任何操作
    if (propWidth && propHeight) {
      return;
    }

    // 创建一个临时的 Image 对象来获取尺寸
    const img = new window.Image();

    const handleLoad = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
      setLoadingStatus('loaded');
    };

    const handleError = () => {
      // 如果加载失败，使用默认尺寸
      setDimensions({ width: 800, height: 600 }); // 默认尺寸
      setLoadingStatus('error');
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    // 设置跨域属性以避免某些 CORS 问题
    img.crossOrigin = 'anonymous';
    img.src = src;

    // 清理函数
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, propWidth, propHeight]);

  // 合并获取到的尺寸和传入的其他属性
  const imgProps = {
    ...rest,
    src,
    alt,
    title,
    className,
    // 总是提供宽度和高度，如果无法获取则使用默认值
    width: dimensions.width || propWidth || 800,
    height: dimensions.height || propHeight || 600,
    style: { borderRadius: '6px', ...rest.style },
  };

  // 如果正在加载中，返回一个具有预设宽高的img标签作为占位符
  if (loadingStatus === 'loading') {
    const placeholderWidth = dimensions.width || propWidth || 800;
    const placeholderHeight = dimensions.height || propHeight || 600;
    
    const svgDataUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${placeholderWidth}' height='${placeholderHeight}'%3E%3C/svg%3E`;
    
    return (
      <img
        {...rest}
        src={svgDataUrl}
        alt={alt || ""}
        title={title}
        className={className}
        width={placeholderWidth}
        height={placeholderHeight}
        style={{
          width: `${placeholderWidth}px`,
          height: `${placeholderHeight}px`,
          backgroundColor: '#f0f0f0',
          objectFit: 'contain',
          ...rest.style
        }}
      />
    );
  }

  return <ImageZoom {...imgProps} style={{ borderRadius: '8px', ...imgProps.style }} />;
}
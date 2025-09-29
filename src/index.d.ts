declare module 'react-native-page-flipper' {
  import React from 'react';
  import { ViewStyle } from 'react-native';

  export interface IPageFlipperProps {
    data: string[];
    enabled?: boolean;
    pressable?: boolean;
    singleImageMode?: boolean;
    renderLastPage?: () => React.ReactElement;
    portrait?: boolean;
    onFlippedEnd?: (index: number) => void;
    onFlipStart?: (id: number) => void;
    onPageDragStart?: () => void;
    onPageDrag?: () => void;
    onPageDragEnd?: () => void;
    onEndReached?: () => void;
    onInitialized?: (props: any) => void;
    renderContainer?: () => any;
    renderPage?: (data: any) => any;
    pageSize: { height: number | string; width: number| string };
    contentContainerStyle: ViewStyle;
  }

  export interface PageFlipperInstance {
    goToPage: (index: number) => void;
    previousPage: () => void;
    nextPage: () => void;
  }

  const PageFlipper: React.ForwardRefExoticComponent<
    IPageFlipperProps & React.RefAttributes<PageFlipperInstance>
  >;

  export default PageFlipper;
}
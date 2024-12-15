import { useRouter } from 'next/navigation';
import React from 'react';
import { Image } from '@/styles/Image';
import { Icon } from '@/styles/Icon';
import { ArrowButton } from '@/styles/ArrowButton';
import { HeaderStyled } from '@/styles/HeaderStyled';

const Header = () => {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <HeaderStyled>
      <ArrowButton onClick={() => navigateBack()}>
        <Icon src="/ArrowBack.svg" alt="previous page button" />
      </ArrowButton>
      <Image src="/logo.svg" alt="Logo" />
    </HeaderStyled>
  );
};

export default Header;

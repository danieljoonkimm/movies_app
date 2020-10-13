import React from 'react'
import { Container, Body, Title, Text, Image, Button } from './styles/Card'
import classNames from 'classnames'

export const Card = ({ classes, children, ...restProps }) => {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  )
}

Card.Body = ({ classes, children, ...restProps }) => {
  return (
    <Body className={classNames('card', classes)} {...restProps}>
      {children}
    </Body>
  )
}

Card.Title = ({ classes, children, ...restProps }) => {
  return (
    <Title className={classNames('card', classes)} {...restProps}>
      {children}
    </Title>
  )
}

Card.Text = ({ classes, children, ...restProps }) => {
  return (
    <Text className={classNames('card', classes)} {...restProps}>
      {children}
    </Text>
  )
}

Card.Image = ({ classes, src, alt, ...restProps }) => {
  return (
    <Image src={src} alt={alt} className={classNames('card_image'), classes} {...restProps}>
    </Image>
  )
}

Card.Button = ({ classes, children, ...restProps }) => {
  return (
    <Button className={classNames('card', classes)} {...restProps}>
      {children}
    </Button>
  )
}
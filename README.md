<h1 align="center">
Bolão da Copa 2022
</h1>

<h2 align="center">
    <img alt="eSports" title="#eSports" src="/images/logo.png" width="250px" />
</h2>

Projeto desenvolvido durante o evento NLW, promovido pela Rocketseat.O projeto tem como objetivo criar bolões dos jogos da copa de 2022. Nele é possível criar ou participar de diversos bolões e possibilitar o compartilhamento com seus amigos.

# Back-end

## Técnologias

Foi desenvolvido em [Node.js](https://nodejs.org/en/) utilizando [TypeScript](https://www.typescriptlang.org/) e as bibliotecas:
- [Prisma](https://www.prisma.io/)
- [Fastify](https://www.fastify.io/)

# Mobile

## Técnologias

Foi desenvolvido em [React Native](https://reactnative.dev/) com [TypeScript](https://www.typescriptlang.org/) utilizando as bibliotecas:
- [Expo](https://expo.dev/)
- [Native Base](https://nativebase.io/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Phosphor Icons](https://phosphoricons.com/)

## Layout
<h2 align="center">
    <img alt="tela_mobile_0" title="#mobile_0" src="/images/mobile_0.png" width="250px" />
    <img alt="tela_mobile_1" title="#mobile_1" src="/images/mobile_1.png" width="250px" />
    <img alt="tela_mobile_2" title="#mobile_2" src="/images/mobile_2.png" width="250px" />
</h2>

# Web

## Técnologias

Desenvolvido em React em [TypeScript](https://www.typescriptlang.org/) com [Next](https://nextjs.org/docs) e [Tailwind](https://tailwindcss.com/) utilizando as bibliotecas:
- [Axios](https://axios-http.com/ptbr/docs/intro)


## Layout
<h2 align="center">
    <img alt="tela_web_0" title="#web_0" src="/images/web_0.png" width="750px" />
</h2>


# Como executar o projeto

## Clone

```bash
# clone o repositório
git clone https://github.com/RogerRoth/bolao-da-copa.git
```

## Back-end

```bash
# entre na pasta do projeto back end
cd server
yarn
npx prisma migrate dev
yarn dev
```

## Web

```bash
# entre na pasta do projeto web
cd web
yarn
yarn dev
```

## Mobile

```bash
# entre na pasta do projeto mobile
cd mobile

yarn
expo start
```

## License

[MIT](LICENSE.md)
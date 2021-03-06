# CSS Animation
Animated form with pure JS and CSS Animation

## Desafios

- [x] 1º - Fazer o formulário aparecer, suavemente, quando a página abrir
- [x] 2º - Fazer os campos aparecem da esquerda pra direita, suavizando a entrada e fazendo-os entrar em momentos distintos
- [x] 3º - Quando clicar em Login, fazer o formulário sair da tela, indo para baixo
- [x] 4º - Remover formulário do html e não mostrar rolagem enquanto o formulário está saindo da tela
- [x] 5º - Adicionar um efeito diferente de timing para a saída do formulário
- [x] 6º - Fazer o formulário dizer não-não (vibrar) caso haja campos vazios.
- [x] 7º - Criar alguns quadrados animados (que fiquem girando) e que saem de baixo da tela (fora do campo de visão) e vão para cima da tela (que saia do campo de visão também). _Detalhes_: Deve ter tamanhos diferentes, sairem em momentos diferentes, terem timing diferente, animação contínua.

## Animation


8 properties:

- animation-name: animationname;
- animation-duration: 2s;
- animation-delay: 3s;
- animation-fill-mode: none;
- animation-play-state: running;
- animation-timing-function: ease;
- animation-direction: reverse;
- animation-iteration-count: infinite;

```css
@keyframes animationname {
  0% {

  }

  100%{

  }
}
```


podemos ter múltiplas animações no mesmo elemento

```css
.animate {
  animation: slide-top 2s, bounce 1s, fade 0.2s;
}
```


## References

[Origem](https://github.com/rocketseat-content/youtube-form-animate-css-js-puro)

[Formulário Animado com JS puro e CSS Animation | Mayk Brito | Rocketseat](https://www.youtube.com/watch?v=GykTLqODQuU)

[CSS Animation Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

[Animation Timing Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

[Site para criar animações](http://animista.net/play/basic/scale-up)

[Site para criar cubic Bézier timming](https://matthewlein.com/tools/ceaser)

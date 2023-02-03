# Recursos utilizados

## ReactRouter

## Link

> O Link é o componente que permite navegar em rotas da sua aplicação e substutui a tag `<a>`, permitindo que você crie links que 
> navegue entre as suas rotas sem recarregar a página inteira.

## UseParams

> É um hook que permite acessar os parâmetros de rotas em aplicações que usam o reactRouter. Ele extrai informação e
> usa para renderizar componentes.
> Um dos segredos deste projeto está no componente postcard que possui as rotas com o parâmetro `to` que passa o id da página

## Rotas aninhadas

## useLocation

> 

## Seletores de rotas dinâmicas 

> Possui uma sintaxe para selecionar rotas dinâmicas como por exemplo:

```
 <Route path="posts/:id" element={<Posts/>}/>
```

## Maneira de se sobreescrever um estilo de um componente

> Dentro do componente estilo se cria mais um estilo para ser usado para sobreescrever o estilo anterior

```
export default function BotaoPrincipal({children}) {
  return (
    <button className={`

      ${styles.botaoPrincipal}
      ${styles.novoEstilo}


    `}>
        {children}
    </button>
  )
}
```

### useNavigation

> Ele é usado para fazer o direcionaento de rotas e também aceita um número como argumento para a navegação na pilha > de histórico. Exemplo do seu uso:

> Documentação --> https://reactrouter.com/en/main/hooks/use-navigate

```
const navegar = useNavigate()

 onClick={() => navegar("/")}
```



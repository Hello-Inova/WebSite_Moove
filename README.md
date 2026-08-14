# Moove — site de marketing

Landing page estática (HTML/CSS/JS puro, sem build) do Moove, sistema de
rastreamento e gestão de transporte escolar. Feita pra atrair motoristas de
van, ônibus e kombi escolar — botão "Teste grátis" no header leva direto
pro sistema em <https://moove-eosin.vercel.app/>.

Esse repositório é **separado** do repositório do app (`Hello-Inova/Moove`)
de propósito: é um site estático simples, sem Next.js, sem build step —
hospedar junto complicaria o deploy do app na Vercel sem necessidade.

## Rodar localmente

Não precisa de instalação nenhuma — é HTML puro. Basta abrir
`index.html` direto no navegador, ou, pra evitar problemas de CORS com
alguns navegadores, servir localmente:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Estrutura

```
index.html        página única
css/styles.css     estilos (mobile-first, com as animações)
js/main.js         menu mobile, accordion do FAQ, scroll reveal
assets/            logo e favicon (copiados do app)
```

## Publicar no GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → branch `main`,
pasta `/ (root)`. A URL fica em `https://<usuario-ou-org>.github.io/<repo>/`
(ou o domínio customizado que você configurar em Settings → Pages →
Custom domain).

## Editar conteúdo

Todo o texto está direto no `index.html` (sem CMS/build) — procure a seção
pelo comentário `<!-- ===== NOME DA SEÇÃO ===== -->`. Cores, fontes e
animações ficam em `css/styles.css` (variáveis no topo, em `:root`).

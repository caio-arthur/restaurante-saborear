import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Clock, MapPin, UtensilsCrossed, Search, Coffee, Beer, Wine, Cake, Flame, X, Plus, Minus, Trash2 } from 'lucide-react';

import batataRustica from './assets/produtos-imagens/batata rustica com cheddar.jpg';
import parmegianaPremium from './assets/produtos-imagens/parmegiana premium.jpg';
import feijoadaCompleta from './assets/produtos-imagens/feijoada-completa.jpg';
import carneDeSol from './assets/produtos-imagens/carne de sol.jpeg';
import calabresa from './assets/produtos-imagens/calabresa.jpeg';
import pastelDeAngu from './assets/produtos-imagens/pastel de angu.jpeg';
import lasanhaDeFrango from './assets/produtos-imagens/lasanha de frango.jpeg';
import feijaoTropeiro from './assets/produtos-imagens/feijão tropeiro.jpeg';
import escondidinhoDeFraldinha from './assets/produtos-imagens/escondidinho de fraldinha.jpeg';
import heineken from './assets/produtos-imagens/heineken.jpeg';
import pinaColada from './assets/produtos-imagens/Pina colada.jpeg';
import caipvodkaMorango from './assets/produtos-imagens/caipvodka morango.jpeg';
import pinkLemonade from './assets/produtos-imagens/pink lemonade.jpeg';
import sucoMaracuja from './assets/produtos-imagens/suco maracuja.jpeg';
import drinkMorangoSemAlcool from './assets/produtos-imagens/drink morango sem alcool.jpeg';
import taramisu from './assets/produtos-imagens/taramisu.jpeg';
import fondueDeChocolate from './assets/produtos-imagens/fondue de chocolate.jpeg';
import cremeBrulee from './assets/produtos-imagens/creme brulee.jpeg';

const App = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  
  // Novo estado para controlar a animação
  const [animarCarrinho, setAnimarCarrinho] = useState(false);

  // Dados estáticos (Mock)
  const categorias = [
    { id: 'Todos', label: 'Todos', icon: <UtensilsCrossed size={18} /> },
    { id: 'Entradas', label: 'Entradas', icon: <Flame size={18} /> },
    { id: 'Prato do Dia', label: 'Prato do Dia', icon: <Clock size={18} /> },
    { id: 'Bebidas', label: 'Bebidas', icon: <Coffee size={18} /> },
    { id: 'Alcoólicas', label: 'Alcoólicas', icon: <Beer size={18} /> },
    { id: 'Sobremesas', label: 'Sobremesas', icon: <Cake size={18} /> },
  ];

  const produtos = [
    // Entradas
    {
      id: 1,
      nome: "Iscas de Frango Crocante",
      descricao: "Acompanha molho especial da casa e limão.",
      preco: 35.90,
      categoria: "Entradas",
      imagem: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      nome: "Batata Rústica com Cheddar",
      descricao: "Batatas cortadas à mão com cheddar e bacon.",
      preco: 28.50,
      categoria: "Entradas",
      imagem: batataRustica,
    },
    {id: 11,
      nome: "Carne de Sol com Mandioca",
      descricao: "Acompanha manteiga de garrafa e salada fresca.",
      preco: 59.50,
      categoria: "Entradas",
      imagem: carneDeSol,
    },
    {
      id: 12,
      nome: "Calabresa",
      descricao: "Calabresa acebolada, servida com pão francês.",
      preco: 35.80,
      categoria: "Entradas",
      imagem: calabresa,
    },
    {
      id: 13,
      nome: "Pastel de Angu com carne seca",
      descricao: "Delicioso pastel frito recheado com carne seca desfiada.",
      preco: 41.90,
      categoria: "Entradas",
      imagem: pastelDeAngu,
    },
    // Prato do Dia
    {
      id: 3,
      nome: "Parmegiana Premium",
      descricao: "Filé mignon empanado, muito queijo e arroz soltinho.",
      preco: 49.90,
      categoria: "Prato do Dia",
      imagem: parmegianaPremium,
    },
    {
      id: 4,
      nome: "Feijoada Completa (Individual)",
      descricao: "Tradicional, acompanha couve, farofa e laranja.",
      preco: 42.00,
      categoria: "Prato do Dia",
      imagem: feijoadaCompleta,
    },
    {
      id: 14,
      nome: "Lasanha de Frango",
      descricao: "Acompanha arroz, batata frita e salada.",
      preco: 35.90,
      categoria: "Prato do Dia",
      imagem: lasanhaDeFrango,
    },
    {
      id: 15,
      nome: "Feijão Tropeiro",
      descricao: "Acompanha, arroz e almôndega",
      preco: 42.90,
      categoria: "Prato do Dia",
      imagem: feijaoTropeiro,
    },
    {
      id: 16,
      nome: "Escondidinho de Fraldinha",
      descricao: "Acompanha arroz, batata frita e salada.",
      preco: 45.00,
      categoria: "Prato do Dia",
      imagem: escondidinhoDeFraldinha,
    },
    // Bebidas
    {
      id: 5,
      nome: "Coca-Cola Lata",
      descricao: "350ml, servida com gelo e limão.",
      preco: 6.00,
      categoria: "Bebidas",
      imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 6,
      nome: "Suco Natural de Laranja",
      descricao: "500ml, feito na hora.",
      preco: 12.00,
      categoria: "Bebidas",
      imagem: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 20,
      nome: "Pink Lemonade",
      descricao: "Limonada rosa com toque de morango.",
      preco: 14.50,
      categoria: "Bebidas",
      imagem: pinkLemonade,
    },
    {
      id: 21,
      nome: "Suco de Maracujá",
      descricao: "Suco natural de maracujá com polpa fresca.",
      preco: 12.50,
      categoria: "Bebidas",
      imagem: sucoMaracuja,
    },
    {
      id: 22,
      nome: "Drink de Morango sem Álcool",
      descricao: "Refrescante drink de morango com hortelã.",
      preco: 17.60,
      categoria: "Bebidas",
      imagem: drinkMorangoSemAlcool,
    },
    // Alcoólicas
    {
      id: 7,
      nome: "Cerveja Artesanal IPA",
      descricao: "Long neck 355ml, notas cítricas.",
      preco: 18.00,
      categoria: "Alcoólicas",
      imagem: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 8,
      nome: "Caipirinha de Limão",
      descricao: "Cachaça artesanal, limão taiti e açúcar.",
      preco: 22.00,
      categoria: "Alcoólicas",
      imagem: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 17,
      nome: "Heineken",
      descricao: "Taça 150ml, encorpado e frutado.",
      preco: 17.80,
      categoria: "Alcoólicas",
      imagem: heineken,
    },
    {
      id: 18,
      nome: "Pina Colada",
      descricao: "Rum, leite de coco e suco de abacaxi.",
      preco: 25.30,
      categoria: "Alcoólicas",
      imagem: pinaColada,
    },
    {
      id: 19,
      nome: "Caipvodka Morango",
      descricao: "Vodka, morango fresco e açúcar.",
      preco: 22.40,
      categoria: "Alcoólicas",
      imagem: caipvodkaMorango,
    },
    // Sobremesas
    {
      id: 9,
      nome: "Petit Gâteau",
      descricao: "Bolo quente de chocolate com sorvete de creme.",
      preco: 26.00,
      categoria: "Sobremesas",
      imagem: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 10,
      nome: "Pudim de Leite",
      descricao: "A receita clássica da casa, sem furinhos.",
      preco: 14.00,
      categoria: "Sobremesas",
      imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 23,
      nome: "Tiramisù",
      descricao: "Sobremesa italiana com camadas de biscoito, café e creme.",
      preco: 24.50,
      categoria: "Sobremesas",
      imagem: taramisu,
    },
    {
      id: 24,
      nome: "Fondue de Chocolate",
      descricao: "Chocolate derretido servido com frutas e marshmallows.",
      preco:  31.80,
      categoria: "Sobremesas",
      imagem: fondueDeChocolate,
    },
    {
      id: 25,
      nome: "Crème Brûlée",
      descricao: "Clássica sobremesa francesa com crosta de açúcar caramelizado.",
      preco: 34.50,
      categoria: "Sobremesas",
      imagem: cremeBrulee,
    },
  ];

  // --- LÓGICA DO CARRINHO ---

  const adicionarAoCarrinho = (produto) => {
    // Ativa a animação
    setAnimarCarrinho(true);
    
    // Desativa a animação após 300ms (tempo suficiente para o efeito visual)
    setTimeout(() => setAnimarCarrinho(false), 300);

    setCarrinho((prevCarrinho) => {
      // Verifica se o item já existe
      const itemExistente = prevCarrinho.find((item) => item.id === produto.id);
      
      if (itemExistente) {
        // Se existe, incrementa quantidade
        return prevCarrinho.map((item) => 
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      // Se não existe, adiciona com quantidade 1
      return [...prevCarrinho, { ...produto, quantidade: 1 }];
    });
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((item) => item.id !== produtoId));
  };

  const atualizarQuantidade = (produtoId, delta) => {
    setCarrinho((prevCarrinho) => {
      return prevCarrinho.map((item) => {
        if (item.id === produtoId) {
          const novaQuantidade = item.quantidade + delta;
          return novaQuantidade > 0 ? { ...item, quantidade: novaQuantidade } : item;
        }
        return item;
      });
    });
  };

  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const valorTotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);

  // Lógica de Filtro
  const produtosFiltrados = produtos.filter((produto) => {
    const matchCategoria = categoriaAtiva === 'Todos' || produto.categoria === categoriaAtiva;
    const matchBusca = produto.nome.toLowerCase().includes(termoBusca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  // Função para finalizar compra no WhatsApp
  const finalizarCompraWhatsApp = () => {
    if (carrinho.length === 0) return;

    const telefone = "5531998436951"; // Número fictício
    let mensagem = `*Olá! Gostaria de fazer um pedido no Saborear:*\n\n`;

    carrinho.forEach((item) => {
      mensagem += `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });

    mensagem += `\n*Total: R$ ${valorTotal.toFixed(2)}*`;
    
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-white relative">
      
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-lg text-slate-950">
              <UtensilsCrossed size={24} strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              SABOREAR
            </h1>
          </div>
          
          {/* Ícone do Carrinho com Animação Condicional */}
          <button 
            onClick={() => setCarrinhoAberto(true)}
            className={`
              p-2 rounded-full transition-all duration-300 relative
              ${animarCarrinho ? 'bg-slate-800 scale-125 shadow-amber-500/50' : 'hover:bg-slate-800'}
            `}
          >
            <ShoppingBag 
              className={`transition-colors duration-300 ${animarCarrinho ? 'text-amber-500' : 'text-slate-300'}`} 
            />
            {totalItens > 0 && (
              <span className={`
                absolute top-0 right-0 bg-amber-500 text-slate-950 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full
                transition-transform duration-300 ${animarCarrinho ? 'scale-125' : 'scale-100'}
              `}>
                {totalItens}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* MODAL DO CARRINHO (OVERLAY) */}
      {carrinhoAberto && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop Escuro */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setCarrinhoAberto(false)}
          ></div>

          {/* Painel Lateral */}
          <div className="relative w-full max-w-md bg-slate-900 h-full shadow-2xl border-l border-slate-800 flex flex-col animate-in slide-in-from-right duration-300">
            
            <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-950">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShoppingBag size={20} className="text-amber-500" /> 
                Seu Pedido
              </h2>
              <button onClick={() => setCarrinhoAberto(false)} className="text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {carrinho.length === 0 ? (
                <div className="text-center py-10 text-slate-500">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Seu carrinho está vazio.</p>
                  <button 
                    onClick={() => setCarrinhoAberto(false)}
                    className="mt-4 text-amber-500 hover:underline text-sm"
                  >
                    Voltar ao cardápio
                  </button>
                </div>
              ) : (
                carrinho.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-slate-950/50 p-3 rounded-xl border border-slate-800 animate-in slide-in-from-bottom-2 fade-in duration-300">
                    <img src={item.imagem} alt={item.nome} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-slate-200 line-clamp-1">{item.nome}</h4>
                      <p className="text-amber-500 font-bold text-sm mt-1">R$ {item.preco.toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center bg-slate-800 rounded-lg">
                          <button 
                            onClick={() => atualizarQuantidade(item.id, -1)}
                            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-l-lg transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantidade}</span>
                          <button 
                            onClick={() => atualizarQuantidade(item.id, 1)}
                            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-r-lg transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removerDoCarrinho(item.id)}
                          className="text-rose-500/70 hover:text-rose-500 p-1.5 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-5 bg-slate-950 border-t border-slate-800">
              <div className="flex justify-between items-center mb-4 text-lg font-bold">
                <span className="text-slate-400">Total</span>
                <span className="text-amber-500">R$ {valorTotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={finalizarCompraWhatsApp}
                disabled={carrinho.length === 0}
                className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
              >
                <Phone size={20} />
                Finalizar Pedido via WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Hero Section Simplificada */}
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase mb-2 block">
            Experiência Gastronômica
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            O melhor sabor da noite
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            Selecione seus pratos favoritos e monte seu pedido completo.
          </p>
          
          {/* Barra de Busca */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="O que você quer comer hoje?"
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-slate-500"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
          </div>
        </div>
      </div>

      {/* Navegação de Categorias */}
      <div className="sticky top-[73px] z-40 bg-slate-950 py-4 border-b border-slate-800/50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${categoriaAtiva === cat.id 
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105' 
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'}
                `}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de Produtos */}
      <main className="container mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
          {categoriaAtiva === 'Todos' ? 'Cardápio Completo' : categoriaAtiva}
          <span className="text-sm font-normal text-slate-500 bg-slate-900 px-2 py-0.5 rounded-md">
            {produtosFiltrados.length} itens
          </span>
        </h3>

        {produtosFiltrados.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-slate-600" size={32} />
            </div>
            <p className="text-slate-500 text-lg">Nenhum produto encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <div 
                key={produto.id} 
                className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col"
              >
                {/* Imagem do Card */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full border border-amber-500/30">
                    <span className="text-amber-500 font-bold">
                      R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white leading-tight">{produto.nome}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {produto.descricao}
                  </p>
                  
                  <button 
                    onClick={() => adicionarAoCarrinho(produto)}
                    className="w-full mt-auto bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all group-hover:shadow-lg active:scale-95 border border-slate-700 hover:border-amber-500"
                  >
                    <Plus size={18} />
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4 text-slate-500">
            <div className="flex items-center gap-2">
              <Clock size={16} /> 18:00 - 02:00
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Centro, Sete Lagoas
            </div>
          </div>
          <p className="text-slate-600 text-sm">
            © 2024 Restaurante Saborear. Desenvolvido para Projeto de Extensão.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
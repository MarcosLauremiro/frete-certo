'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    title: 'Posso usar o simulador pelo celular?',
    content:
      'Sim. O Frete Certo foi feito pra ser simples, rápido e fácil de usar direto do celular. Não precisa instalar nada — é só acessar, preencher os dados e ver o resultado na hora.',
  },
  {
    title: 'O simulador mostra se a minha operação tá dando lucro ou prejuízo?',
    content:
      'Não. Ele vai muito além — mostra a viabilidade da sua operação inteira, o que realmente sobra no fim do mês e onde tá o gargalo do lucro.',
  },
  {
    title: 'O simulador mostra se a minha operação tá dando lucro ou prejuízo?',
    content:
      'Ele revela a saúde da sua operação: quanto você fatura, quanto gasta, e quanto realmente sobra de lucro. Tudo de forma simples e visual.',
  },
  {
    title: 'O que exatamente o simulador mostra?',
    content:
      'Ele revela a saúde da sua operação: quanto você fatura, quanto gasta, e quanto realmente sobra de lucro. Tudo de forma simples e visual.',
  },
  {
    title: 'Em quanto tempo eu vejo diferença na prática?',
    content:
      'No primeiro uso. Em minutos você já enxerga se a operação fecha o mês com lucro e onde ajustar pra melhorar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-cestnter justify-center gap-6 p-4">
      <h1 className="text-[20px] leading-[22px] font-bold text-center lg:text-left lg:text-[48px] lg:leading-[52px]">
        Perguntas Frequentes
      </h1>

      <div className="w-full max-w-7xl flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-[#202020]  border border-[#545454] rounded-lg px-5 py-4 cursor-pointer transition"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center gap-4">
                <h2 className="text-[14px] lg:text-[24px] font-medium">
                  {faq.title}
                </h2>

                {isOpen ? (
                  <Minus className="w-3 h-3 lg:w-6 lg:h-6 shrink-0 text-[#FF781C]" />
                ) : (
                  <Plus className="w-3 h-3 lg:w-6 lg:h-6 shrink-0 text-[#FF781C]" />
                )}
              </div>

              {isOpen && (
                <p className="mt-3 text-[12px] text-[#ffffff] lg:text-[18px]">
                  {faq.content}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export type ContractType = {
  id: string
  name: string
  description: string
  category: 'freelancer' | 'agenti' | 'general'
  price: number
  fields: ContractField[]
}

export type ContractField = {
  id: string
  label: string
  type: 'text' | 'email' | 'phone' | 'date' | 'number' | 'textarea' | 'select'
  placeholder?: string
  required: boolean
  options?: string[]
}

export const CONTRACT_TYPES: ContractType[] = [
  {
    id: 'contract-prestari-servicii',
    name: 'Contract Prestări Servicii',
    description: 'Contract standard pentru PFA și freelanceri IT, design, consultanță',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'prestator_nume', label: 'Numele prestatorului', type: 'text', required: true, placeholder: 'Ex: Ion Popescu PFA' },
      { id: 'prestator_cui', label: 'CUI/CIF prestator', type: 'text', required: true, placeholder: 'Ex: RO12345678' },
      { id: 'prestator_adresa', label: 'Adresa prestatorului', type: 'textarea', required: true, placeholder: 'Str. ..., nr. ..., Cluj-Napoca' },
      { id: 'beneficiar_nume', label: 'Numele beneficiarului', type: 'text', required: true, placeholder: 'Ex: ABC SRL' },
      { id: 'beneficiar_cui', label: 'CUI beneficiar', type: 'text', required: true, placeholder: 'Ex: RO87654321' },
      { id: 'beneficiar_adresa', label: 'Adresa beneficiarului', type: 'textarea', required: true, placeholder: 'Str. ..., nr. ...' },
      { id: 'obiect_contract', label: 'Obiectul contractului', type: 'textarea', required: true, placeholder: 'Ex: Dezvoltare aplicație web, design grafic, consultanță IT' },
      { id: 'valoare', label: 'Valoarea contractului (RON)', type: 'number', required: true, placeholder: 'Ex: 5000' },
      { id: 'moneda', label: 'Moneda', type: 'select', required: true, options: ['RON', 'EUR', 'USD'] },
      { id: 'termen_livrare', label: 'Termen de livrare', type: 'date', required: true },
      { id: 'termen_plata', label: 'Termen de plată (zile)', type: 'number', required: true, placeholder: 'Ex: 30' },
    ]
  },
  {
    id: 'contract-colaborare',
    name: 'Contract de Colaborare',
    description: 'Contract colaborare între PFA-uri sau microîntreprinderi',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'parte1_nume', label: 'Partea I - Denumire', type: 'text', required: true, placeholder: 'Ex: Ion Popescu PFA' },
      { id: 'parte1_cui', label: 'Partea I - CUI', type: 'text', required: true },
      { id: 'parte1_adresa', label: 'Partea I - Adresă', type: 'textarea', required: true },
      { id: 'parte2_nume', label: 'Partea II - Denumire', type: 'text', required: true, placeholder: 'Ex: Maria Ionescu SRL' },
      { id: 'parte2_cui', label: 'Partea II - CUI', type: 'text', required: true },
      { id: 'parte2_adresa', label: 'Partea II - Adresă', type: 'textarea', required: true },
      { id: 'obiect', label: 'Obiectul colaborării', type: 'textarea', required: true },
      { id: 'durata', label: 'Durata colaborării', type: 'select', required: true, options: ['3 luni', '6 luni', '12 luni', 'Nedeterminată'] },
      { id: 'distributie_venituri', label: 'Distribuția veniturilor (%)', type: 'text', required: true, placeholder: 'Ex: 60% Partea I, 40% Partea II' },
    ]
  },
  {
    id: 'contract-agent-imobiliar',
    name: 'Contract Agent Imobiliar',
    description: 'Contract de intermediere imobiliară între agent și client',
    category: 'agenti',
    price: 15,
    fields: [
      { id: 'agentie_nume', label: 'Denumirea agenției', type: 'text', required: true, placeholder: 'Ex: Real Estate Pro SRL' },
      { id: 'agentie_cui', label: 'CUI agenție', type: 'text', required: true },
      { id: 'agent_nume', label: 'Numele agentului', type: 'text', required: true },
      { id: 'client_nume', label: 'Numele clientului', type: 'text', required: true },
      { id: 'client_cnp', label: 'CNP client', type: 'text', required: true },
      { id: 'client_adresa', label: 'Adresa client', type: 'textarea', required: true },
      { id: 'client_telefon', label: 'Telefon client', type: 'phone', required: true },
      { id: 'tip_tranzactie', label: 'Tipul tranzacției', type: 'select', required: true, options: ['Vânzare', 'Cumpărare', 'Închiriere', 'Subînchiriere'] },
      { id: 'descriere_proprietate', label: 'Descrierea proprietății', type: 'textarea', required: true, placeholder: 'Tip, suprafață, zonă, caracteristici' },
      { id: 'pret_estimat', label: 'Prețul estimat (EUR)', type: 'number', required: false },
      { id: 'comision', label: 'Comisionul agenției (%)', type: 'number', required: true, placeholder: 'Ex: 3' },
      { id: 'durata_mandat', label: 'Durata mandatului (luni)', type: 'number', required: true, placeholder: 'Ex: 3' },
    ]
  },
  {
    id: 'contract-agent-asigurari',
    name: 'Contract Agent Asigurări',
    description: 'Contract de intermediere în asigurări',
    category: 'agenti',
    price: 15,
    fields: [
      { id: 'broker_nume', label: 'Broker/Companie asigurări', type: 'text', required: true },
      { id: 'broker_cui', label: 'CUI broker', type: 'text', required: true },
      { id: 'agent_nume', label: 'Numele agentului', type: 'text', required: true },
      { id: 'client_nume', label: 'Numele clientului', type: 'text', required: true },
      { id: 'client_cnp', label: 'CNP/CUI client', type: 'text', required: true },
      { id: 'tip_asigurare', label: 'Tipul asigurării', type: 'select', required: true, options: ['RCA', 'CASCO', 'Asigurare de viață', 'Asigurare locuință', 'Asigurare de sănătate', 'Asigurare de călătorie'] },
      { id: 'prima_asigurare', label: 'Prima de asigurare (RON/an)', type: 'number', required: true },
      { id: 'perioada', label: 'Perioada asigurată', type: 'select', required: true, options: ['1 an', '2 ani', '5 ani', '10 ani', 'Nedeterminat'] },
    ]
  },
  {
    id: 'acord-confidentialitate',
    name: 'Acord de Confidențialitate (NDA)',
    description: 'NDA standard pentru protejarea informațiilor confidențiale',
    category: 'general',
    price: 15,
    fields: [
      { id: 'divulgator_nume', label: 'Divulgatorul (cel care dezvăluie)', type: 'text', required: true },
      { id: 'divulgator_cui', label: 'CUI/CNP divulgator', type: 'text', required: true },
      { id: 'destinatar_nume', label: 'Destinatarul informațiilor', type: 'text', required: true },
      { id: 'destinatar_cui', label: 'CUI/CNP destinatar', type: 'text', required: true },
      { id: 'obiect_confidential', label: 'Tipul informațiilor confidențiale', type: 'textarea', required: true, placeholder: 'Ex: date financiare, cod sursă, strategie de business, lista de clienți' },
      { id: 'scop', label: 'Scopul divulgării', type: 'textarea', required: true, placeholder: 'Ex: evaluarea unui parteneriat de business' },
      { id: 'durata_confidentialitate', label: 'Durata obligației de confidențialitate', type: 'select', required: true, options: ['1 an', '2 ani', '3 ani', '5 ani', 'Nedeterminat'] },
      { id: 'clauza_penalitate', label: 'Penalitate pentru nerespectare (RON)', type: 'number', required: false, placeholder: 'Ex: 10000' },
    ]
  },
  {
    id: 'contract-vanzare-cumparare',
    name: 'Contract Vânzare-Cumpărare',
    description: 'Contract de vânzare pentru bunuri mobile (echipamente, marfă)',
    category: 'general',
    price: 15,
    fields: [
      { id: 'vanzator_nume', label: 'Vânzătorul', type: 'text', required: true },
      { id: 'vanzator_cui', label: 'CUI/CNP vânzător', type: 'text', required: true },
      { id: 'cumparator_nume', label: 'Cumpărătorul', type: 'text', required: true },
      { id: 'cumparator_cui', label: 'CUI/CNP cumpărător', type: 'text', required: true },
      { id: 'descriere_bun', label: 'Descrierea bunului', type: 'textarea', required: true, placeholder: 'Tip, model, serie, caracteristici' },
      { id: 'pret', label: 'Prețul de vânzare (RON)', type: 'number', required: true },
      { id: 'modalitate_plata', label: 'Modalitatea de plată', type: 'select', required: true, options: ['Numerar', 'Transfer bancar', 'Card', 'Rate', 'Parțial avans'] },
      { id: 'data_predare', label: 'Data predării bunului', type: 'date', required: true },
      { id: 'locul_predarii', label: 'Locul predării', type: 'text', required: true },
    ]
  },
  {
    id: 'contract-inchiriere',
    name: 'Contract de Închiriere',
    description: 'Contract de închiriere pentru spații comerciale sau echipamente',
    category: 'general',
    price: 15,
    fields: [
      { id: 'locator_nume', label: 'Locatorul (proprietarul)', type: 'text', required: true },
      { id: 'locator_cui', label: 'CUI/CNP locator', type: 'text', required: true },
      { id: 'locatar_nume', label: 'Locatarul (chiriașul)', type: 'text', required: true },
      { id: 'locatar_cui', label: 'CUI/CNP locatar', type: 'text', required: true },
      { id: 'descriere_spatiu', label: 'Descrierea spațiului/bunului', type: 'textarea', required: true },
      { id: 'adresa', label: 'Adresa/Locația', type: 'textarea', required: true },
      { id: 'suprafata', label: 'Suprafața (mp)', type: 'number', required: false },
      { id: 'chirie_lunara', label: 'Chiria lunară (RON)', type: 'number', required: true },
      { id: 'data_inceput', label: 'Data de început', type: 'date', required: true },
      { id: 'durata', label: 'Durata contractului', type: 'select', required: true, options: ['1 an', '2 ani', '3 ani', '5 ani', 'Nedeterminată'] },
      { id: 'garantie', label: 'Garanție (luni de chirie)', type: 'number', required: false, placeholder: 'Ex: 2' },
    ]
  },
  {
    id: 'contract-consultanta',
    name: 'Contract de Consultanță',
    description: 'Contract pentru servicii de consultanță (juridică, fiscală, IT, management)',
    category: 'freelancer',
    price: 15,
    fields: [
      { id: 'consultant_nume', label: 'Consultantul', type: 'text', required: true },
      { id: 'consultant_cui', label: 'CUI/CNP consultant', type: 'text', required: true },
      { id: 'client_nume', label: 'Clientul', type: 'text', required: true },
      { id: 'client_cui', label: 'CUI/CNP client', type: 'text', required: true },
      { id: 'domeniu', label: 'Domeniul consultanței', type: 'select', required: true, options: ['IT & Tehnologie', 'Financiar-contabil', 'Juridic', 'Management', 'Marketing', 'HR', 'Alt domeniu'] },
      { id: 'descriere_servicii', label: 'Descrierea serviciilor', type: 'textarea', required: true },
      { id: 'tarif', label: 'Tariful', type: 'number', required: true, placeholder: 'Ex: 100' },
      { id: 'tip_tarif', label: 'Tipul tarifului', type: 'select', required: true, options: ['RON/oră', 'EUR/oră', 'RON/zi', 'EUR/zi', 'RON/lună', 'EUR/lună', 'Forfetar RON', 'Forfetar EUR'] },
      { id: 'durata', label: 'Durata contractului', type: 'select', required: true, options: ['1 lună', '3 luni', '6 luni', '12 luni', 'Nedeterminată'] },
    ]
  },
]

export function getContractById(id: string): ContractType | undefined {
  return CONTRACT_TYPES.find(c => c.id === id)
}

export function generateContractText(contract: ContractType, data: Record<string, string>): string {
  const today = new Date().toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })
  const contractNumber = `CR-${Date.now().toString().slice(-6)}`

  if (contract.id === 'contract-prestari-servicii') {
    return `CONTRACT DE PRESTĂRI SERVICII
Nr. ${contractNumber} / ${today}

I. PĂRȚILE CONTRACTANTE

PRESTATOR: ${data.prestator_nume}
CUI: ${data.prestator_cui}
Adresa: ${data.prestator_adresa}

BENEFICIAR: ${data.beneficiar_nume}
CUI: ${data.beneficiar_cui}
Adresa: ${data.beneficiar_adresa}

II. OBIECTUL CONTRACTULUI

Prestatorul se obligă să execute pentru Beneficiar următoarele servicii:
${data.obiect_contract}

III. VALOAREA CONTRACTULUI

Valoarea totală a contractului este de ${data.valoare} ${data.moneda || 'RON'}, fără TVA (dacă este cazul).

IV. TERMENUL DE LIVRARE

Termenul de livrare/finalizare este: ${data.termen_livrare}

V. MODALITATEA DE PLATĂ

Plata se va efectua în termen de ${data.termen_plata} zile de la livrarea și acceptarea serviciilor, prin transfer bancar sau altă modalitate agreată de comun acord.

VI. OBLIGAȚIILE PRESTATORULUI

a) Să execute serviciile conform specificațiilor convenite;
b) Să respecte termenele stabilite;
c) Să informeze Beneficiarul despre eventualele impedimente;
d) Să păstreze confidențialitatea informațiilor Beneficiarului.

VII. OBLIGAȚIILE BENEFICIARULUI

a) Să achite contravaloarea serviciilor la termenele stabilite;
b) Să pună la dispoziția Prestatorului informațiile necesare;
c) Să colaboreze cu Prestatorul pentru buna desfășurare a contractului.

VIII. RĂSPUNDEREA CONTRACTUALĂ

Nerespectarea obligațiilor de plată atrage penalități de 0,1% pe zi de întârziere din suma datorată.

IX. FORȚA MAJORĂ

Niciuna dintre părți nu răspunde pentru neexecutarea obligațiilor cauzată de forță majoră, conform legii.

X. LITIGII

Litigiile se rezolvă pe cale amiabilă sau, dacă nu este posibil, prin instanțele judecătorești competente din România.

XI. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 (două) exemplare originale, câte unul pentru fiecare parte.

PRESTATOR                                    BENEFICIAR

${data.prestator_nume}                       ${data.beneficiar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'acord-confidentialitate') {
    return `ACORD DE CONFIDENȚIALITATE (NDA)
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

DIVULGATORUL: ${data.divulgator_nume}
CUI/CNP: ${data.divulgator_cui}

DESTINATARUL: ${data.destinatar_nume}
CUI/CNP: ${data.destinatar_cui}

II. DEFINIȚII

"Informații Confidențiale" înseamnă orice informații tehnice, comerciale, financiare sau de altă natură referitoare la:
${data.obiect_confidential}

III. SCOPUL DIVULGĂRII

Informațiile confidențiale sunt divulgate exclusiv în scopul:
${data.scop}

IV. OBLIGAȚII

Destinatarul se obligă:
a) Să păstreze strictă confidențialitate asupra informațiilor primite;
b) Să nu le dezvăluie terților fără acordul scris al Divulgatorului;
c) Să le folosească exclusiv în scopul menționat;
d) Să returneze sau distrugă documentele la cerere.

V. DURATA

Obligația de confidențialitate se menține timp de ${data.durata_confidentialitate} de la semnarea prezentului acord.

VI. PENALITĂȚI

${data.clauza_penalitate ? `Nerespectarea obligațiilor atrage plata de daune de ${data.clauza_penalitate} RON.` : 'Nerespectarea obligațiilor atrage răspunderea civilă conform legii.'}

VII. DISPOZIȚII FINALE

Prezentul acord a fost încheiat în 2 exemplare originale.

DIVULGATORUL                                 DESTINATARUL

${data.divulgator_nume}                      ${data.destinatar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  // Generic template for other contract types
  return `${contract.name.toUpperCase()}
Nr. ${contractNumber} / ${today}

ÎNTRE PĂRȚILE:

${Object.entries(data).map(([key, value]) => `${key.replace(/_/g, ' ').toUpperCase()}: ${value}`).join('\n')}

Prezentul contract a fost încheiat cu bună-credință, în conformitate cu legislația română în vigoare.

Semnătura: _________________                 Data: ${today}`
}

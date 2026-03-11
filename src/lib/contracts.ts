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

  {
    id: 'acord-gdpr',
    name: 'Acord Prelucrare Date (GDPR)',
    description: 'Acord obligatoriu pentru colectarea și prelucrarea datelor personale ale clienților',
    category: 'general' as const,
    price: 15,
    fields: [
      { id: 'operator_nume', label: 'Operatorul (firma ta)', type: 'text' as const, required: true },
      { id: 'operator_cui', label: 'CUI operator', type: 'text' as const, required: true },
      { id: 'operator_adresa', label: 'Adresa operatorului', type: 'textarea' as const, required: true },
      { id: 'persoana_vizata', label: 'Persoana vizată (client/angajat/etc)', type: 'text' as const, required: true },
      { id: 'scop_prelucrare', label: 'Scopul prelucrării datelor', type: 'textarea' as const, required: true, placeholder: 'Ex: facturare, livrare produse, marketing cu consimțământ' },
      { id: 'categorii_date', label: 'Categoriile de date prelucrate', type: 'textarea' as const, required: true, placeholder: 'Ex: nume, email, telefon, adresă, CNP' },
      { id: 'durata_retentie', label: 'Durata retenției datelor', type: 'select' as const, required: true, options: ['1 an', '3 ani', '5 ani', '10 ani', 'Pe durata relației contractuale + 3 ani'] },
    ]
  },
  {
    id: 'contract-telemunca',
    name: 'Contract Telemuncă',
    description: 'Act adițional sau contract pentru munca desfășurată de acasă (remote/hybrid)',
    category: 'general' as const,
    price: 15,
    fields: [
      { id: 'angajator_nume', label: 'Angajatorul', type: 'text' as const, required: true },
      { id: 'angajator_cui', label: 'CUI angajator', type: 'text' as const, required: true },
      { id: 'angajat_nume', label: 'Angajatul', type: 'text' as const, required: true },
      { id: 'angajat_cnp', label: 'CNP angajat', type: 'text' as const, required: true },
      { id: 'functia', label: 'Funcția/Postul', type: 'text' as const, required: true, placeholder: 'Ex: Programator, Designer, Contabil' },
      { id: 'locatie_telemunca', label: 'Locația telemuncii', type: 'text' as const, required: true, placeholder: 'Ex: domiciliul angajatului din Cluj-Napoca' },
      { id: 'program_lucru', label: 'Programul de lucru', type: 'text' as const, required: true, placeholder: 'Ex: 09:00-17:00, Luni-Vineri' },
      { id: 'zile_telemunca', label: 'Zile telemuncă/săptămână', type: 'select' as const, required: true, options: ['1 zi/săptămână', '2 zile/săptămână', '3 zile/săptămână', '4 zile/săptămână', '5 zile/săptămână (full remote)'] },
      { id: 'echipamente', label: 'Echipamente furnizate de angajator', type: 'textarea' as const, required: false, placeholder: 'Ex: laptop, monitor, tastatura (sau "angajatul folosește echipamente proprii")' },
      { id: 'data_incepere', label: 'Data începerii telemuncii', type: 'date' as const, required: true },
    ]
  },
  {
    id: 'antecontract-vanzare',
    name: 'Antecontract Vânzare-Cumpărare',
    description: 'Promisiune bilaterală de vânzare pentru imobile sau bunuri de valoare mare',
    category: 'agenti' as const,
    price: 15,
    fields: [
      { id: 'promitent_vanzator', label: 'Promitentul-vânzător', type: 'text' as const, required: true },
      { id: 'vanzator_cnp', label: 'CNP/CUI promitent-vânzător', type: 'text' as const, required: true },
      { id: 'promitent_cumparator', label: 'Promitentul-cumpărător', type: 'text' as const, required: true },
      { id: 'cumparator_cnp', label: 'CNP/CUI promitent-cumpărător', type: 'text' as const, required: true },
      { id: 'descriere_bun', label: 'Descrierea bunului promis', type: 'textarea' as const, required: true, placeholder: 'Ex: Apartament 3 camere, str. X nr. Y, Cluj-Napoca, CF nr. ...' },
      { id: 'pret_vanzare', label: 'Prețul de vânzare convenit (EUR)', type: 'number' as const, required: true },
      { id: 'avans', label: 'Avansul achitat la semnare (EUR)', type: 'number' as const, required: true },
      { id: 'termen_perfectare', label: 'Termenul de perfectare a vânzării', type: 'date' as const, required: true },
      { id: 'penalitate', label: 'Penalitate nerespectare (dublu avans)', type: 'select' as const, required: true, options: ['Da, se aplică (standard)', 'Nu se aplică'] },
    ]
  },
  {
    id: 'cesiune-drepturi-autor',
    name: 'Cesiune Drepturi de Autor',
    description: 'Cesiunea drepturilor patrimoniale pentru creații: software, design, conținut, muzică',
    category: 'freelancer' as const,
    price: 15,
    fields: [
      { id: 'cedent_nume', label: 'Cedentul (creatorul)', type: 'text' as const, required: true },
      { id: 'cedent_cnp', label: 'CNP/CUI cedent', type: 'text' as const, required: true },
      { id: 'cesionar_nume', label: 'Cesionarul (beneficiarul)', type: 'text' as const, required: true },
      { id: 'cesionar_cui', label: 'CUI cesionar', type: 'text' as const, required: true },
      { id: 'descriere_opera', label: 'Descrierea operei/creației', type: 'textarea' as const, required: true, placeholder: 'Ex: Aplicație software "X", cod sursă în Python/React; Design logo "Brand Y"; Articole blog (10 articole)' },
      { id: 'tip_cesiune', label: 'Tipul cesiunii', type: 'select' as const, required: true, options: ['Exclusivă (cedentul nu mai poate folosi opera)', 'Neexclusivă (cedentul păstrează dreptul de utilizare)'] },
      { id: 'teritoriu', label: 'Teritoriul', type: 'select' as const, required: true, options: ['Teritoriul României', 'Uniunea Europeană', 'Mondial'] },
      { id: 'durata', label: 'Durata cesiunii', type: 'select' as const, required: true, options: ['1 an', '3 ani', '5 ani', '10 ani', 'Toată durata drepturilor de autor (70 ani de la creație)'] },
      { id: 'pret_cesiune', label: 'Prețul cesiunii (RON)', type: 'number' as const, required: true },
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

  if (contract.id === 'contract-colaborare') {
    return `CONTRACT DE COLABORARE
Nr. ${contractNumber} / ${today}

I. PĂRȚILE CONTRACTANTE

PARTEA I: ${data.parte1_nume}
CUI/CNP: ${data.parte1_cui}
Adresa: ${data.parte1_adresa}

PARTEA II: ${data.parte2_nume}
CUI/CNP: ${data.parte2_cui}
Adresa: ${data.parte2_adresa}

II. OBIECTUL COLABORĂRII

Părțile convin să colaboreze în vederea:
${data.obiect}

III. DURATA CONTRACTULUI

Prezentul contract se încheie pe o perioadă de: ${data.durata}
Data de intrare în vigoare: ${today}

IV. DISTRIBUȚIA VENITURILOR

Veniturile rezultate din colaborare se vor distribui astfel:
${data.distributie_venituri}

V. OBLIGAȚIILE PĂRȚILOR

Fiecare parte se obligă:
a) Să contribuie cu resursele convenite;
b) Să respecte termenele și obiectivele stabilite;
c) Să informeze cealaltă parte despre orice modificare relevantă;
d) Să păstreze confidențialitatea informațiilor partenerului.

VI. RĂSPUNDEREA CONTRACTUALĂ

Neîndeplinirea obligațiilor asumate atrage răspunderea civilă a părții vinovate.

VII. ÎNCETAREA CONTRACTULUI

Contractul poate înceta prin: acordul ambelor părți, expirarea termenului, sau notificare scrisă cu 30 zile preaviz.

VIII. LITIGII

Litigiile se soluționează pe cale amiabilă sau prin instanțele judecătorești competente.

IX. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

PARTEA I                                     PARTEA II

${data.parte1_nume}                          ${data.parte2_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-agent-imobiliar') {
    return `CONTRACT DE INTERMEDIERE IMOBILIARĂ
Nr. ${contractNumber} / ${today}

I. PĂRȚILE CONTRACTANTE

AGENȚIA: ${data.agentie_nume}
CUI: ${data.agentie_cui}
Agent responsabil: ${data.agent_nume}

CLIENT: ${data.client_nume}
CNP: ${data.client_cnp}
Adresa: ${data.client_adresa}
Telefon: ${data.client_telefon}

II. OBIECTUL CONTRACTULUI

Agenția se obligă să intermedieze o tranzacție de ${data.tip_tranzactie} pentru:
${data.descriere_proprietate}

${data.pret_estimat ? `Prețul estimat: ${data.pret_estimat} EUR` : ''}

III. COMISIONUL AGENȚIEI

Clientul se obligă să achite agenției un comision de ${data.comision}% din valoarea tranzacției finalizate.
Comisionul devine exigibil la momentul semnării actelor de tranzacție.

IV. DURATA MANDATULUI

Prezentul contract este valabil pe o perioadă de ${data.durata_mandat} luni de la data semnării.

V. OBLIGAȚIILE AGENȚIEI

a) Să identifice și prezinte proprietăți corespunzătoare cerințelor clientului;
b) Să organizeze vizionările solicitate;
c) Să furnizeze informații corecte și complete despre proprietăți;
d) Să asiste clientul în procesul de negociere.

VI. OBLIGAȚIILE CLIENTULUI

a) Să furnizeze informații corecte despre necesitățile și posibilitățile financiare;
b) Să achite comisionul convenit la finalizarea tranzacției;
c) Să informeze agenția imediat despre orice tranzacție directă cu vânzători/cumpărători prezentați de agenție.

VII. EXCLUSIVITATE

Prezentul contract ${data.tip_tranzactie === 'Vânzare' ? 'nu' : 'nu'} conferă exclusivitate agenției.

VIII. LITIGII

Litigiile se soluționează pe cale amiabilă sau prin instanțele din raza domiciliului clientului.

IX. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare.

AGENȚIA                                      CLIENTUL

${data.agentie_nume}                         ${data.client_nume}
Agent: ${data.agent_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-agent-asigurari') {
    return `CONTRACT DE INTERMEDIERE ÎN ASIGURĂRI
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

BROKERUL/COMPANIA: ${data.broker_nume}
CUI: ${data.broker_cui}
Agent: ${data.agent_nume}

ASIGURATUL: ${data.client_nume}
CNP/CUI: ${data.client_cnp}

II. OBIECTUL CONTRACTULUI

Brokerul se obligă să intermedieze o polița de asigurare de tip: ${data.tip_asigurare}

III. PRIMA DE ASIGURARE

Prima de asigurare anuală: ${data.prima_asigurare} RON
Perioada asigurată: ${data.perioada}

IV. OBLIGAȚIILE BROKERULUI

a) Să prezinte oferte de asigurare corespunzătoare nevoilor clientului;
b) Să explice condițiile și excluderile poliței;
c) Să asiste clientul în caz de daună;
d) Să acționeze în interesul asiguratului.

V. OBLIGAȚIILE ASIGURATULUI

a) Să furnizeze informații corecte și complete;
b) Să achite prima de asigurare la termenele convenite;
c) Să notifice orice modificare a riscului asigurat.

VI. COMISIONUL

Brokerul percepe comision de la compania de asigurări, nu de la asigurat.

VII. LEGEA APLICABILĂ

Prezentul contract este supus legii române. Litigiile se soluționează de instanțele competente.

VIII. DISPOZIȚII FINALE

Prezentul contract a fost redactat în 2 exemplare.

BROKERUL                                     ASIGURATUL

${data.broker_nume}                          ${data.client_nume}
Agent: ${data.agent_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-vanzare-cumparare') {
    return `CONTRACT DE VÂNZARE-CUMPĂRARE
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

VÂNZĂTORUL: ${data.vanzator_nume}
CUI/CNP: ${data.vanzator_cui}

CUMPĂRĂTORUL: ${data.cumparator_nume}
CUI/CNP: ${data.cumparator_cui}

II. OBIECTUL CONTRACTULUI

Vânzătorul transmite cumpărătorului dreptul de proprietate asupra:
${data.descriere_bun}

III. PREȚUL

Prețul de vânzare convenit este de ${data.pret} RON.
Modalitatea de plată: ${data.modalitate_plata}

IV. PREDAREA BUNULUI

Predarea bunului se va efectua la data de ${data.data_predare}, la ${data.locul_predarii}.
La momentul predării, vânzătorul garantează că bunul este liber de sarcini și datorii.

V. GARANȚII

Vânzătorul garantează că:
a) Este proprietarul de drept al bunului;
b) Bunul nu este gajat, sechestrat sau ipotecat;
c) Nu există litigii privind bunul.

VI. RĂSPUNDEREA PENTRU VICII

Vânzătorul răspunde pentru viciile ascunse conform Codului Civil.

VII. LITIGII

Litigiile se rezolvă pe cale amiabilă sau de instanțele judecătorești competente.

VIII. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

VÂNZĂTORUL                                   CUMPĂRĂTORUL

${data.vanzator_nume}                        ${data.cumparator_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-inchiriere') {
    return `CONTRACT DE ÎNCHIRIERE
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

LOCATORUL (Proprietarul): ${data.locator_nume}
CUI/CNP: ${data.locator_cui}

LOCATARUL (Chiriașul): ${data.locatar_nume}
CUI/CNP: ${data.locatar_cui}

II. OBIECTUL CONTRACTULUI

Locatorul dă în chirie locatarului:
${data.descriere_spatiu}

Adresa/Locația: ${data.adresa}
${data.suprafata ? `Suprafața: ${data.suprafata} mp` : ''}

III. DURATA CONTRACTULUI

Contractul se încheie pe o perioadă de ${data.durata}, începând cu ${data.data_inceput}.

IV. CHIRIA

Chiria lunară este de ${data.chirie_lunara} RON, plătibilă până în ziua 5 a fiecărei luni.
${data.garantie ? `Garanție: ${data.garantie} luni de chirie, achitată la semnarea contractului.` : ''}

V. OBLIGAȚIILE LOCATORULUI

a) Să predea spațiul în stare corespunzătoare utilizării;
b) Să asigure liniștita folosință pe durata contractului;
c) Să efectueze reparațiile majore necesare.

VI. OBLIGAȚIILE LOCATARULUI

a) Să plătească chiria la termenele stabilite;
b) Să folosească spațiul conform destinației convenite;
c) Să nu subînchirieze fără acordul scris al locatorului;
d) Să predea spațiul în starea în care l-a primit.

VII. INDEXAREA CHIRIEI

Chiria se poate indexa anual cu indicele inflației comunicat de INS.

VIII. REZILIEREA CONTRACTULUI

Contractul poate fi reziliat cu 30 zile preaviz scris. Neachitarea chiriei pe 2 luni consecutive dă dreptul locatorului la reziliere imediată.

IX. LITIGII

Litigiile se soluționează de instanțele competente de la locul situării imobilului.

X. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

LOCATORUL                                    LOCATARUL

${data.locator_nume}                         ${data.locatar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-consultanta') {
    return `CONTRACT DE CONSULTANȚĂ
Nr. ${contractNumber} / ${today}

I. PĂRȚILE

CONSULTANTUL: ${data.consultant_nume}
CUI/CNP: ${data.consultant_cui}

CLIENTUL: ${data.client_nume}
CUI/CNP: ${data.client_cui}

II. OBIECTUL CONTRACTULUI

Consultantul prestează servicii de consultanță în domeniul: ${data.domeniu}

Descrierea serviciilor:
${data.descriere_servicii}

III. TARIFUL DE CONSULTANȚĂ

Tariful convenit: ${data.tarif} ${data.tip_tarif}
Durata contractului: ${data.durata}

IV. MODALITATEA DE PLATĂ

Plata se efectuează lunar, pe baza raportului de activitate transmis de consultant, în termen de 15 zile de la emiterea facturii.

V. OBLIGAȚIILE CONSULTANTULUI

a) Să furnizeze servicii de calitate, cu diligența unui profesionist;
b) Să respecte confidențialitatea informațiilor clientului;
c) Să raporteze lunar activitățile desfășurate;
d) Să informeze clientul despre orice conflict de interese.

VI. OBLIGAȚIILE CLIENTULUI

a) Să achite tarifele la termenele convenite;
b) Să furnizeze informațiile necesare desfășurării activității;
c) Să colaboreze activ pentru atingerea obiectivelor.

VII. CLAUZA DE CONFIDENȚIALITATE

Consultantul se obligă să păstreze confidențialitatea tuturor informațiilor la care are acces, pe durata contractului și 2 ani după încetarea acestuia.

VIII. PROPRIETATEA INTELECTUALĂ

Lucrările și documentele elaborate de consultant în cadrul acestui contract sunt proprietatea clientului, dacă nu se prevede altfel.

IX. LITIGII

Litigiile se soluționează pe cale amiabilă sau de instanțele judecătorești competente.

X. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

CONSULTANTUL                                 CLIENTUL

${data.consultant_nume}                      ${data.client_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }


  if (contract.id === 'acord-gdpr') {
    return `ACORD DE PRELUCRARE A DATELOR CU CARACTER PERSONAL
Nr. ${contractNumber} / ${today}
(în conformitate cu Regulamentul UE 2016/679 — GDPR)

I. OPERATORUL DE DATE

Denumire: ${data.operator_nume}
CUI: ${data.operator_cui}
Adresa: ${data.operator_adresa}

II. PERSOANA VIZATĂ

${data.persoana_vizata}

III. SCOPUL PRELUCRĂRII

Operatorul prelucrează datele cu caracter personal în următoarele scopuri:
${data.scop_prelucrare}

IV. CATEGORIILE DE DATE PRELUCRATE

${data.categorii_date}

V. TEMEIUL LEGAL

Prelucrarea se realizează în baza: art. 6 alin. (1) lit. b) GDPR (executarea unui contract) și/sau art. 6 alin. (1) lit. a) GDPR (consimțământul persoanei vizate).

VI. DURATA RETENȚIEI

Datele vor fi păstrate timp de: ${data.durata_retentie}

VII. DREPTURILE PERSOANEI VIZATE

Persoana vizată are dreptul la: acces, rectificare, ștergere, restricționarea prelucrării, portabilitate, opoziție și de a nu face obiectul unei decizii automate. Poate exercita aceste drepturi la: ${data.operator_adresa}

Poate depune plângere la ANSPDCP (www.dataprotection.ro).

VIII. TRANSMITEREA DATELOR CĂTRE TERȚI

Datele nu vor fi transmise către terți fără consimțământul explicit al persoanei vizate, cu excepția obligațiilor legale.

IX. SEMNĂTURĂ

OPERATORUL                                   PERSOANA VIZATĂ

${data.operator_nume}                        ${data.persoana_vizata}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'contract-telemunca') {
    return `ACT ADIȚIONAL NR. ${contractNumber}
LA CONTRACTUL INDIVIDUAL DE MUNCĂ
privind desfășurarea activității în regim de TELEMUNCĂ
Încheiat la data de: ${today}

În conformitate cu Legea nr. 81/2018 privind reglementarea activității de telemuncă

I. ANGAJATORUL

${data.angajator_nume}
CUI: ${data.angajator_cui}

II. ANGAJATUL

Nume: ${data.angajat_nume}
CNP: ${data.angajat_cnp}
Funcția: ${data.functia}

III. LOCUL DESFĂȘURĂRII ACTIVITĂȚII ÎN REGIM DE TELEMUNCĂ

${data.locatie_telemunca}

IV. PROGRAMUL DE LUCRU

${data.program_lucru}
Zile telemuncă: ${data.zile_telemunca}

V. OBLIGAȚIILE ANGAJATORULUI (art. 7 Legea 81/2018)

a) Să asigure mijloacele tehnice necesare desfășurării activității;
b) Să instruiască angajatul privind securitatea și sănătatea în muncă;
c) Să respecte dreptul la viața privată a angajatului la domiciliu;
d) Să asigure confidențialitatea datelor procesate de angajat.

VI. OBLIGAȚIILE ANGAJATULUI

a) Să respecte programul de lucru convenit;
b) Să asigure confidențialitatea informațiilor de serviciu;
c) Să utilizeze echipamentele conform procedurilor interne;
d) Să fie disponibil pe canalele de comunicare convenite.

${data.echipamente ? `VII. ECHIPAMENTE

Angajatorul pune la dispoziție:
${data.echipamente}` : ''}

VIII. DATA INTRĂRII ÎN VIGOARE

Prezentul act adițional intră în vigoare la data de: ${data.data_incepere}

ANGAJATOR                                    ANGAJAT

${data.angajator_nume}                       ${data.angajat_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'antecontract-vanzare') {
    return `ANTECONTRACT DE VÂNZARE-CUMPĂRARE
Nr. ${contractNumber} / ${today}

I. PROMITENTUL-VÂNZĂTOR

${data.promitent_vanzator}
CNP/CUI: ${data.vanzator_cnp}

II. PROMITENTUL-CUMPĂRĂTOR

${data.promitent_cumparator}
CNP/CUI: ${data.cumparator_cnp}

III. OBIECTUL ANTECONTRACTULUI

Promitentul-vânzător se obligă să vândă, iar Promitentul-cumpărător se obligă să cumpere:
${data.descriere_bun}

IV. PREȚUL ȘI CONDIȚIILE DE PLATĂ

Prețul total convenit: ${data.pret_vanzare} EUR
Avans achitat la semnarea antecontractului: ${data.avans} EUR
Rest de plată la perfectarea vânzării: ${parseInt(data.pret_vanzare || '0') - parseInt(data.avans || '0')} EUR

V. TERMENUL DE PERFECTARE

Vânzarea-cumpărarea definitivă se va perfecta în formă autentică (la notar) până la data de: ${data.termen_perfectare}

VI. CLAUZA PENALIZATOARE

${data.penalitate === 'Da, se aplică (standard)' 
  ? 'Dacă Promitentul-vânzător refuză perfectarea vânzării, va returna dublu avansul primit. Dacă Promitentul-cumpărător refuză, va pierde avansul achitat.'
  : 'Părțile au convenit că nu se aplică penalități pentru nerespectarea promisiunii, avansul urmând a fi returnat integral.'}

VII. CHELTUIELI DE PERFECTARE

Cheltuielile notariale și taxele aferente perfectării vânzării vor fi suportate de Promitentul-cumpărător, dacă nu se va conveni altfel.

VIII. DISPOZIȚII FINALE

Prezentul antecontract este guvernat de Codul Civil român. Litigiile se soluționează de instanțele competente.

PROMITENT-VÂNZĂTOR                           PROMITENT-CUMPĂRĂTOR

${data.promitent_vanzator}                   ${data.promitent_cumparator}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  if (contract.id === 'cesiune-drepturi-autor') {
    return `CONTRACT DE CESIUNE A DREPTURILOR PATRIMONIALE DE AUTOR
Nr. ${contractNumber} / ${today}

În conformitate cu Legea nr. 8/1996 privind dreptul de autor și drepturile conexe

I. CEDENTUL

Nume: ${data.cedent_nume}
CNP/CUI: ${data.cedent_cnp}

II. CESIONARUL

Denumire: ${data.cesionar_nume}
CUI: ${data.cesionar_cui}

III. OBIECTUL CESIUNII

Cedentul cedează Cesionarului drepturile patrimoniale de autor asupra:
${data.descriere_opera}

IV. TIPUL CESIUNII

Cesiunea este: ${data.tip_cesiune}

V. TERITORIUL

Cesiunea acoperă: ${data.teritoriu}

VI. DURATA

Cesiunea este acordată pentru: ${data.durata}

VII. PREȚUL CESIUNII

Prețul convenit pentru cesiunea drepturilor: ${data.pret_cesiune} RON

Plata se efectuează la semnarea prezentului contract/în termen de 30 zile de la predarea operei.

VIII. DREPTURILE MORALE

Cedentul își rezervă drepturile morale de autor (dreptul la paternitate și integritate), în conformitate cu art. 10 din Legea 8/1996. Cesionarul va menționa numele Cedentului în calitate de autor, dacă natura utilizării permite acest lucru.

IX. GARANȚII

Cedentul garantează că este unicul autor al operei, că opera nu încalcă drepturile terților și că nu a mai cedat aceleași drepturi unor terți.

X. LITIGII

Litigiile se soluționează pe cale amiabilă sau de instanțele judecătorești competente.

XI. DISPOZIȚII FINALE

Prezentul contract a fost încheiat în 2 exemplare originale.

CEDENTUL                                     CESIONARUL

${data.cedent_nume}                          ${data.cesionar_nume}

Semnătura: _________________                 Semnătura: _________________

Data: ${today}                               Data: ${today}`
  }

  // Fallback
  return `${contract.name.toUpperCase()}
Nr. ${contractNumber} / ${today}

${Object.entries(data).map(([key, value]) => `${key.replace(/_/g, ' ').toUpperCase()}: ${value}`).join('\n')}

Prezentul contract a fost încheiat cu bună-credință, conform legislației române în vigoare.

Semnătura: _________________                 Data: ${today}`
}

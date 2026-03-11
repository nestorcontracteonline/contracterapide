import { NextRequest, NextResponse } from 'next/server'
import { Document, Packer, Paragraph, TextRun, AlignmentType, Header, Footer } from 'docx'
import { getContractById, generateContractText } from '@/lib/contracts'

export async function POST(req: NextRequest) {
  const { contractId, formData, contractNumber } = await req.json()

  const contract = getContractById(contractId)
  if (!contract) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const contractText = generateContractText(contract, formData)

  const lines = contractText.split('\n')
  const docParagraphs = lines.map(line => {
    const isTitle = !!(line.match(/^[IVX]+\.|^CONTRACT|^ACORD|^ANEXA/))
    const isEmpty = line.trim() === ''

    if (isEmpty) return new Paragraph({ spacing: { after: 100 } })

    return new Paragraph({
      children: [new TextRun({
        text: line,
        bold: isTitle,
        size: isTitle ? 24 : 22,
        font: 'Times New Roman',
      })],
      alignment: isTitle ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
      spacing: { after: isTitle ? 200 : 100, line: 320 },
    })
  })

  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        }
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            children: [new TextRun({ text: `${contract.name} — ContracteRapide.ro`, size: 16, color: '888888', font: 'Arial' })],
            alignment: AlignmentType.RIGHT,
          })]
        })
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            children: [
              new TextRun({ text: `Nr. ${contractNumber} — Generat prin ContracteRapide.ro`, size: 16, color: '888888', font: 'Arial' }),
            ],
            alignment: AlignmentType.CENTER,
          })]
        })
      },
      children: docParagraphs,
    }]
  })

  const buffer = await Packer.toBuffer(doc)
  const filename = `${contract.id}-${contractNumber}.docx`
  const uint8Array = new Uint8Array(buffer)

  return new NextResponse(uint8Array, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename="${filename}"`,
    }
  })
}

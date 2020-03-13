describe('Primer pantallazo', function() {
		it('Primer pantallazo', function() {
      cy.visit('https://dtmaciasca-taller-6-resemblejs.glitch.me/VRT_colorPallete/palette.html')
			cy.get('[onclick="randomPalette()"]').click()
			cy.screenshot('imagen1')
		})
})

describe('Segundo pantallazo', function() {
		it('Segundo pantallazo', function() {
      cy.visit('https://dtmaciasca-taller-6-resemblejs.glitch.me/VRT_colorPallete/palette.html')
			cy.get('[onclick="randomPalette()"]').click()
			cy.screenshot('imagen2')
		})
})

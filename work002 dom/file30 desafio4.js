new Vue({
	el: '#desafio',
	data: {
	   classe1: 'destaque',
	   perigo: true,
	   classe3: '',
	   classe4: '',
	   cor5: '',
	   estilo5: {
		width: '100px',
		height: '100px',
	   },
	   width: '0',
	},
	methods: {
		iniciarEfeito() {
            setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
            let valor = 0
			const cronometro = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(cronometro)
			}, 500)
		},
		setPerigo(evento) {
			if(evento.target.value == "true") {
			   this.perigo = true
			}
			else if(evento.target.value == "false") {
			   this.perigo = false
			}
		}
	}
})

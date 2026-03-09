    package school.sptech.projetoindividual;
    import jakarta.persistence.*;
    import java.time.LocalDate;
    @Entity
    @Table(name = "jogador")
    public class Model {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
    
        @Column(length = 100, nullable = false)
        private String nome;
    
        @Column(nullable = false)
        private Integer numeroCamisa;
    
        @Column(nullable = false)
        private LocalDate dataNascimento;
    
        @Column(nullable = false)
        private Boolean titular;
    
        @Column(length = 20, nullable = false)
        private String posicao;

        @ManyToOne
        @JoinColumn(name = "selecao_id")
        private SelecaoModel selecao;

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public Integer getNumeroCamisa() {
            return numeroCamisa;
        }

        public void setNumeroCamisa(Integer numeroCamisa) {
            this.numeroCamisa = numeroCamisa;
        }

        public LocalDate getDataNascimento() {
            return dataNascimento;
        }

        public void setDataNascimento(LocalDate dataNascimento) {
            this.dataNascimento = dataNascimento;
        }

        public Boolean getTitular() {
            return titular;
        }

        public void setTitular(Boolean titular) {
            this.titular = titular;
        }

        public String getPosicao() {
            return posicao;
        }

        public void setPosicao(String posicao) {
            this.posicao = posicao;
        }

        public SelecaoModel getSelecao() {
            return selecao;
        }

        public void setSelecao(SelecaoModel selecao) {
            this.selecao = selecao;
        }
    }
    
    
    

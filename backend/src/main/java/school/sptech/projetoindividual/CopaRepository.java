package school.sptech.projetoindividual;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CopaRepository extends JpaRepository<Model, Integer> {

    List<Model> findBySelecaoId(Integer selecaoId);

    List<Model> findByPosicao(String posicao);

    List<Model> findByNomeContainingIgnoreCase(String nome);
}

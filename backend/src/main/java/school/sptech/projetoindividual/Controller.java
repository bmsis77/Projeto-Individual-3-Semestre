package school.sptech.projetoindividual;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/copas")
public class Controller {
    @Autowired
    private CopaRepository repository;
    @Autowired
    private SelecaoRepository selecaoRepository;

    @GetMapping("/selecoes")
    public ResponseEntity<List<SelecaoModel>> listarSelecoes() {
        return ResponseEntity.ok(selecaoRepository.findAll());
    }
    @GetMapping
    public ResponseEntity<List<Model>> listar() {
        List<Model> lista = repository.findAll();
        if (lista.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(lista);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Model> buscarPorId(@PathVariable Integer id) {
        Optional<Model> jogador = repository.findById(id);
        if (jogador.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(jogador.get());
    }
    @PostMapping
    public ResponseEntity<Model> criar(@RequestBody Model novo) {
        if(novo.getNome() == null || novo.getNome().isBlank()){
            return ResponseEntity.badRequest().build();
        }
        Model salvo = repository.save(novo);
        return ResponseEntity.status(201).body(salvo);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Model> atualizar(@PathVariable Integer id, @RequestBody Model atualizado) {
        Optional<Model> registro = repository.findById(id);
        if (registro.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        atualizado.setId(id);
        Model salvo = repository.save(atualizado);
        return ResponseEntity.ok(salvo);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        Optional<Model> registro = repository.findById(id);
        if (registro.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
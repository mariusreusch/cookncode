package ch.pama.cookncode.rest;

import ch.pama.cookncode.CooknCodeMain;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CooknCodeMain.class)
@WebAppConfiguration
@AutoConfigureMockMvc
public class RecipeRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testRandomRest() throws Exception {
        mockMvc.perform(get("/recipes/random"))
                .andExpect(content().string("This is a random recipe."));

    }

    @Test
    public void getRecipeById() throws Exception {
        mockMvc.perform(get("/recipes/1"))
                .andExpect(content().string("A first recipe"));

    }
}

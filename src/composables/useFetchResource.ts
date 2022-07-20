import axios from "axios";
import { Ref, ref } from "vue";

export const useFetchResource = (url) => {
    const loadingState: Ref<string | null> = ref(null);
    const resource = ref([]);

    const fetchResource = () => {
        loadingState.value = "loading";
        axios
            .get(url)
            .then((response) => {
                setTimeout(() => {
                    loadingState.value = "success";
                    resource.value = response.data.results;
                }, 1000);
            });
    };
    return {
        loadingState,
        resource,
        fetchResource,
    }
}
<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            v-model="searchQuery"
        />
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Создать пост
            </my-button>

            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <h2>Создание поста</h2>
            <post-form
                @create="createPost"
            />
        </my-dialog>
        <post-list
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Идёт загрузка...</div>

        <div
            v-intersection="loadMorePosts"
            class="observer"
        ></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';

export default {
    components: {
        PostList, PostForm
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: true,
            page: 1,
            limit: 10,
            totalPages: 0,
            searchQuery: '',
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ],
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);

                this.posts = [...response.data];
            } catch (e) {
                alert('Ошибка');
            }
            finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            if (this.page >= this.totalPages) return;
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert('Ошибка');
            }
        },
        changePage(pageNumber) {
            this.page = pageNumber;
        },
    },
    mounted() {
        this.fetchPosts();
    },
    watch: {
        // page() {
        //     this.fetchPosts();
        // }
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
}
</script>

<style>
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid #000;
    padding: 10px;
}

.current_page {
    border: 2px solid teal;
}

.observer {
    /* height: 20px;
    background: green; */
}

</style>
import http from '../service/api.factory';

class DataService {
  // UPDATE
  async updateByUserId(data) {
    try {
      const response = await http.dataApi.put('/user/id', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update user - ', e);
      return false;
    }
  }
  async updateShow(data) {
    try {
      const response = await http.dataApi.put('/show', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update show - ', e);
      return false;
    }
  }
  async updateBanners(data) {
    try {
      const response = await http.dataApi.put('/banners', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update banners - ', e);
      return false;
    }
  }
  async updateUserBingeList(data) {
    try {
      const response = await http.dataApi.put('/bingeList', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update bingeList - ', e);
      return false;
    }
  }
  async updateComment(data) {
    try {
      const response = await http.dataApi.put('/comment', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update comment - ', e);
      return false;
    }
  }
  async updateFriendRequest(data) {
    try {
      const response = await http.dataApi.put('/userrelations/accept', data);
      return response.data;
    } catch (e) {
      console.error('Failed to update accept friend request - ', e);
      return false;
    }
  }
  // POST
  async postRequestShow(data) {
    try {
      const response = await http.dataApi.post('/requestShow', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE show request - ', e);
      return false;
    }
  }
  async postShow(data) {
    try {
      const response = await http.dataApi.post('/show', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE show - ', e);
      return false;
    }
  }
  async postBingeList(data) {
    try {
      const response = await http.dataApi.post('/bingeList', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE bingeList show - ', e);
      return false;
    }
  }
  async postComment(data) {
    try {
      const response = await http.dataApi.post('/comment', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE comment show - ', e);
      return false;
    }
  }
  async postUserRelation(data) {
    try {
      const response = await http.dataApi.post('/userrelations', data);
      return response;
    } catch (e) {
      console.error('Failed to CREATE user relations show - ', e);
      return false;
    }
  }
  // GET
  async getUserByFilter(user) {
    try {
      const response = await http.dataApi.get(
        `/user/filter/?idUser=${user.id_user}&googleId=${user.google_id}&username=${user.username}&roleId=${user.role_id}&timezone=${user.time_zone}&offset=${user.offset}&limit=${user.limit}`
      );
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET User by Id - ', e);
      return false;
    }
  }
  async getUserById(id) {
    try {
      const response = await http.dataApi.get(`/user/id/?id=${id}`);
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET User by Id - ', e);
      return false;
    }
  }
  async getCharactersDropdown() {
    try {
      const response = await http.dataApi.get('/character/dropdown');
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET character - ', e);
      return false;
    }
  }
  async getActorDropdown() {
    try {
      const response = await http.dataApi.get('/actor/dropdown');
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET actor - ', e);
      return false;
    }
  }
  async getShowDropdown() {
    try {
      const response = await http.dataApi.get('/show/dropdown');
      return response.data;
    } catch (e) {
      console.error('Failed to GET show dropdown - ', e);
      return false;
    }
  }
  async getBanners() {
    try {
      const response = await http.dataApi.get('/banners');
      return response.data.rows[0].banners;
    } catch (e) {
      console.error('Failed to GET banners - ', e);
      return false;
    }
  }
  async getCheckAdd(data) {
    try {
      const response = await http.dataApi.get(`/bingeList/checkAdd/?userId=${data.user_id}&showId=${data.show_id}`);
      return response.data;
    } catch (e) {
      console.error('Failed to GET checkAdd - ', e);
      return false;
    }
  }
  async getCommentByShow(id) {
    try {
      const response = await http.dataApi.get(`/comment/?showId=${id}`);
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET comment - ', e);
      return false;
    }
  }
  // Might not need anymore? was in browseshow.vue but using filter now.
  async getShowDisplay() {
    try {
      const response = await http.dataApi.get('/show/display');
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET show display- ', e);
      return false;
    }
  }
  async getShowById(id) {
    try {
      const response = await http.dataApi.get(`/show/?id=${id}`);
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET show by Id - ', e);
      return false;
    }
  }
  async getShowBrowseFilter(browserFilter) {
    try {
      const response = await http.dataApi.get(
        `/show/filter/?country=${browserFilter.country}&genre=${browserFilter.genre}&airingStatus=${browserFilter.airingStatus}&yearStart=${browserFilter.yearStart}&yearEnd=${browserFilter.yearEnd}&searchText=${browserFilter.searchText}&offset=${browserFilter.offset}&limit=${browserFilter.limit}&order=${browserFilter.order}`
      );
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET show browse filter - ', e);
      return false;
    }
  }
  async getAccountList(data) {
    try {
      const response = await http.dataApi.get(
        `/bingeList/filter/?country=${data.country}&genre=${data.genre}&status=${data.status}&yearStart=${data.yearStart}&yearEnd=${data.yearEnd}&userId=${data.userId}&favourite=${data.favourite}`
      );
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET account list - ', e);
      return false;
    }
  }
  async getRequestShowByUnprocessed() {
    try {
      const response = await http.dataApi.get('/requestShow');
      return response.data;
    } catch (e) {
      console.error('Failed to GET show request - ', e);
      return false;
    }
  }
  async getGenreCounts(id) {
    try {
      const response = await http.dataApi.get(`/stats/genre/?id=${id}`);
      return response.data;
    } catch (e) {
      console.error('Failed to GET genre count - ', e);
      return false;
    }
  }
  async getScoreCounts(id) {
    try {
      const response = await http.dataApi.get(`/stats/score/?id=${id}`);
      return response.data;
    } catch (e) {
      console.error('Failed to GET score count - ', e);
      return false;
    }
  }
  async getStatusCounts(id) {
    try {
      const response = await http.dataApi.get(`/stats/status/?id=${id}`);
      return response.data;
    } catch (e) {
      console.error('Failed to GET status count - ', e);
      return false;
    }
  }
  async getRelationsByUserId(data) {
    try {
      const response = await http.dataApi.get(`/userrelations/request/?id=${data.id}&type=${data.type}`);
      return response.data.rows;
    } catch (e) {
      console.error('Failed to GET relation by user id - ', e);
      return false;
    }
  }
  // DELETE
  async deleteShow(id) {
    try {
      const response = await http.dataApi.delete(`/show/delete/?id=${id}`);
      return response;
    } catch (e) {
      console.error('Failed to DELETE show - ', e);
      return false;
    }
  }
  async deleteBingeList(id) {
    try {
      const response = await http.dataApi.delete(`/bingeList/?id=${id}`);
      return response;
    } catch (e) {
      console.error('Failed to DELETE bingeList - ', e);
      return false;
    }
  }
  async deleteComment(id) {
    try {
      const response = await http.dataApi.delete(`/comment/?idComment=${id}`);
      return response;
    } catch (e) {
      console.error('Failed to DELETE comment - ', e);
      return false;
    }
  }
  async deleteRequestShow(id) {
    try {
      const response = await http.dataApi.delete(`/requestShow/?id=${id}`);
      return response;
    } catch (e) {
      console.error('Failed to DELETE show request - ', e);
      return false;
    }
  }
  async deleteFriend(id) {
    try {
      const response = await http.dataApi.delete(`/userrelations/?id=${id}`);
      return response;
    } catch (e) {
      console.error('Failed to DELETE friend - ', e);
      return false;
    }
  }
  async isAdmin(user) {
    try {
      const response = await http.dataApi.get('/auth/isAdmin', user);
      return response.data.isAdmin;
    } catch (e) {
      console.error('Failed to get admin - ', e);
      return false;
    }
  }
}

export default new DataService();

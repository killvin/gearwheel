package com.company.servlet;

import java.io.IOException;
import java.util.Hashtable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public abstract class FormObject extends HttpServlet {
	public void doPost(
		javax.servlet.http.HttpServletRequest request,
		javax.servlet.http.HttpServletResponse response)
		throws javax.servlet.ServletException, java.io.IOException {
			
		response.setHeader("Content-disposition","inline;filename=Example.pdf" );
			
		performTask(request, response);
	}

	public void doGet(
		javax.servlet.http.HttpServletRequest request,
		javax.servlet.http.HttpServletResponse response)
		throws javax.servlet.ServletException, java.io.IOException {
		performTask(request, response);  
	}

	public boolean validate(  
		javax.servlet.http.HttpServletRequest req,
		javax.servlet.http.HttpServletResponse res)
		throws java.io.IOException, javax.servlet.ServletException {
			
		HttpSession session = req.getSession(true);
		
		if (session.getAttribute("userIdenSess") != null) 
			return true;	
			
		System.out.println(session.getAttribute("userIdenSess") != null);		
			
		getServletContext().getContext("btcjerpamWeb")
			.getRequestDispatcher("/jsp/co/message/LostSession.jsp")
			.forward(req, res);
			
		return false;
	}




	public void performTask(
		javax.servlet.http.HttpServletRequest request,
		javax.servlet.http.HttpServletResponse response)
		throws javax.servlet.ServletException, java.io.IOException {
		//validate(request, response);
	}

}
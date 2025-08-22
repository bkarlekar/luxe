export async function POST(request) {
  try {
    const body = await request.json();
    const { service, stylist, date, time, name, email, phone, notes } = body;

    // Validate required fields
    if (!service || !stylist || !date || !time || !name || !email || !phone) {
      return Response.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return Response.json(
        { error: 'Please provide a valid phone number' },
        { status: 400 }
      );
    }

    // Generate a booking ID
    const bookingId = 'LHS-' + Date.now().toString(36).toUpperCase();

    // In a real application, you would:
    // 1. Check stylist availability for the selected date/time
    // 2. Save the booking to a database
    // 3. Send confirmation emails to both client and salon
    // 4. Integrate with calendar systems
    // 5. Send SMS confirmations
    // 6. Set up reminder notifications

    const bookingData = {
      id: bookingId,
      service,
      stylist,
      date,
      time,
      name,
      email,
      phone,
      notes,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    // Log the booking (in production, save to database)
    console.log('New booking created:', bookingData);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    return Response.json({
      success: true,
      bookingId,
      message: 'Your appointment has been successfully booked! We\'ve sent a confirmation email with all the details.'
    });

  } catch (error) {
    console.error('Booking error:', error);
    return Response.json(
      { error: 'Internal server error. Please try again later or call us directly.' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve booking information (for future use)
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const bookingId = url.searchParams.get('id');

    if (!bookingId) {
      return Response.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    // In a real application, you would fetch from database
    // For now, return a placeholder response
    return Response.json({
      message: 'Booking lookup functionality would be implemented here',
      bookingId
    });

  } catch (error) {
    console.error('Booking lookup error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}